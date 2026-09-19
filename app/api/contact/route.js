import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactEmail from "../../../emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter
const requests = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const last = requests.get(ip);
  if (last && now - last < 30_000) return true; // 30s cooldown
  requests.set(ip, now);
  return false;
}

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a minute." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, message, phone } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required field" },
        { status: 400 }
      );
    }
    if (name.length > 150 || email.length > 50 || message.length > 500) {
      return NextResponse.json(
        { success: false, error: "Field too long" },
        { status: 400 }
      );
    }
    if (phone && phone.length > 20) {
      return NextResponse.json(
        { success: false, error: "Phone number too long" },
        { status: 400 }
      );
    }

    const htmlContent = await render(
      <ContactEmail name={name} email={email} message={message} phone={phone} />
    );

    
    const response = NextResponse.json({
      success: true,
      message: "Contact request received. Owner will be notified.",
    });


    resend.emails.send({
      from: "support@rajathapa.com.np",
      to: "al.inkstudio23@gmail.com",
      subject: `[Contact Request] ${name}`,
      html: htmlContent,
      text: `
        New Contact Request

        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}

        Message:
        ${message}
      `,
    }).catch((err) => {
      console.error("Resend async error:", err);
    });

    return response;
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}