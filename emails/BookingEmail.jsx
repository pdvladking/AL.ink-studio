import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
} from "@react-email/components";

export default function BookingEmail({
  type = "booking",
  name,
  email,
  phone,
  date,
  time,
  day,
  style,
  deposit,
  message,
}) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fafafa" }}>
        <Container style={{ maxWidth: "640px", margin: "auto", border: "1px solid #eee", borderRadius: "10px", overflow: "hidden" }}>
          
          {/* Header */}
          <Section style={{ backgroundColor: "#111", color: "#facc15", padding: "16px", textAlign: "center" }}>
            <Heading style={{ margin: 0, color: "#facc15", fontSize: "22px" }}>
              Al.Ink Studio
            </Heading>
            <Text style={{ margin: 0, fontSize: "14px", color: "#facc15" }}>
              Booking Confirmation
            </Text>
          </Section>

          {/* Body */}
          <Section style={{ padding: "20px", backgroundColor: "#fafafa", color: "#111" }}>
            <Text>Hi Diwash,</Text>
            <Text>
              A new booking request has been submitted. Here are the details for your review:
            </Text>

            <Text style={{ fontWeight: "bold", marginTop: "12px" }}>Summary:</Text>
            <ul style={{ paddingLeft: "18px", margin: 0 }}>
              <li><strong>Name:</strong> {name || "N/A"}</li>
              <li><strong>Email:</strong> {email || "N/A"}</li>
              <li><strong>Phone:</strong> {phone || "N/A"}</li>
              <li><strong>Date:</strong> {date || "N/A"}</li>
              <li><strong>Time:</strong> {time || "N/A"}</li>
              <li><strong>Preferred day:</strong> {day || "N/A"}</li>
              <li><strong>Style:</strong> {style || "N/A"}</li>
              <li><strong>Deposit:</strong> {deposit || "N/A"}</li>
            </ul>

            <Text style={{ marginTop: "12px", fontWeight: "bold" }}>Message:</Text>
            <blockquote style={{
              background: "#fff",
              padding: "12px",
              borderLeft: "4px solid #facc15",
              margin: 0,
              whiteSpace: "pre-wrap"
            }}>
              {message}
            </blockquote>

            <Text style={{ fontSize: "12px", color: "#555", marginTop: "16px" }}>
              If you didn’t submit this, you can ignore this email.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: "#111", color: "#fff", padding: "12px", textAlign: "center", fontSize: "12px" }}>
            <Text style={{ margin: 0 }}>
              © {new Date().getFullYear()} AL.Ink Studio
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}