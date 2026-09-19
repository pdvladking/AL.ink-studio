import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
} from "@react-email/components";

export default function ContactEmail({ name, email, phone, message }) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#fafafa",
        }}
      >
        <Container
          style={{
            maxWidth: "640px",
            margin: "auto",
            border: "1px solid #eee",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Section
            style={{
              backgroundColor: "#111",
              color: "#facc15",
              padding: "16px",
              textAlign: "center",
            }}
          >
            <Heading
              style={{ margin: 0, color: "#facc15", fontSize: "22px" }}
            >
              AL.Ink Studio
            </Heading>
            <Text
              style={{ margin: 0, fontSize: "14px", color: "#facc15" }}
            >
              Contact Request
            </Text>
          </Section>

          {/* Body */}
          <Section
            style={{
              padding: "20px",
              backgroundColor: "#fafafa",
              color: "#111",
            }}
          >
            <Text>Hi Diwash,</Text>
            <Text>
              You’ve received a new contact request from <strong>{name}</strong>.
            </Text>

            <Text style={{ fontWeight: "bold", marginTop: "12px" }}>
              Details:
            </Text>
            <ul style={{ paddingLeft: "18px", margin: 0 }}>
              <li>
                <strong>Name:</strong> {name}
              </li>
              <li>
                <strong>Email:</strong> {email}
              </li>
              <li>
                <strong>Phone:</strong> {phone || "N/A"}
              </li>
            </ul>

            <Text style={{ marginTop: "12px", fontWeight: "bold" }}>
              Message:
            </Text>
            <blockquote
              style={{
                background: "#fff",
                padding: "12px",
                borderLeft: "4px solid #facc15",
                margin: 0,
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </blockquote>
          </Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: "#111",
              color: "#fff",
              padding: "12px",
              textAlign: "center",
              fontSize: "12px",
            }}
          >
            <Text style={{ margin: 0 }}>
              © {new Date().getFullYear()} Al.Ink Studio
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}