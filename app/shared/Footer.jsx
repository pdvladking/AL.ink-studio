"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";

export default function FooterSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "/bookings", label: "Book" },
    { href: "/gallery", label: "Gallery" },
    { href: "/artists", label: "Artists" },
    { href: "/studio", label: "About" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  const contacts = [
    { icon: FaPhone, text: "+977-9816245996", href: "tel:+9779816245996", label: "Call Eden Tattoo Nepal" },
    { icon: FaEnvelope, text: "al.inkstudio23@gmail.com", href: "mailto:al.inkstudio23@gmail.com", label: "Al.ink studio" },
    { icon: FaWhatsapp, text: "WhatsApp", href: "https://wa.me/9764638332", label: "WhatsApp Eden Tattoo Nepal" },
  ];

  const socials = [
    { href: "https://www.facebook.com/Al.Inkstudio23/", icon: FaFacebookF, label: "Facebook" },
    { href: "https://www.instagram.com/al.inkstudio/", icon: FaInstagram, label: "Instagram" },
    { href: "https://www.tiktok.com/@al.inkstudio23", icon: FaTiktok, label: "TikTok" },
  ];

  const studioHours = [
    { day: "Sun–Sat", time: "10:00 AM – 11:00 PM" },
  ];

  return (
    <footer
      id="footer"
      className={`bg py-20 px-6 transition-all duration-700 ease-out ${
        loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 text-center md:text-left">
        
        {/* Left Column: Studio Info + Map */}
        <div className="space-y-6">
          <SectionHeading>AL.Ink Studio</SectionHeading>
          <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-yellow-500/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14126.337265459128!2d85.30130335541993!3d27.730117999999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19024f520a5b%3A0x270457d7ad43792c!2sAL.Ink%20Studio!5e0!3m2!1sen!2snp!4v1789623356064!5m2!1sen!2snp" 
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing Eden Tattoo Nepal location"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Links + Other Info */}
        <div className="space-y-8">
          {/* Nav Links in Row */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-yellow-500 transition">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contacts */}
          <div className="flex flex-col items-start md:items-start space-y-2 text-sm text-white">
            {contacts.map(({ icon: Icon, text, href, label }, idx) => (
              <a
                key={idx}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="hover:text-yellow-500 transition flex items-center gap-2"
              >
                <Icon /> {text}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex justify-start md:justify-start gap-6 text-xl text-white">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-yellow-500 transition transform hover:scale-110 hover:-translate-y-1"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Studio Hours */}
          <div className="text-sm text-white">
            <h3 className="font-semibold mb-2">Studio Hours</h3>
            <ul className="space-y-1">
              {studioHours.map(({ day, time }, i) => (
                <li key={i}>{day}: {time}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="w-full h-px bg-linear-to-r from-yellow-600/20 via-gray-600/10 to-yellow-500/20 my-10" />
      <div className="text-center space-y-2 text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} AL.INK Studio. All rights reserved.</p>
        <p>
          Built and designed by{" "}
          <a
            href="https://rajathapa.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-500 transition"
          >
            Rajthapa.com.np
          </a>
        </p>
      </div>
    </footer>
  );
}