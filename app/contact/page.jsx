"use client";
import SectionHeading from "../components/SectionHeading";
import QueryForm from "../features/contact/QueryForm";

export default function ContactPage() {
  return (
    <main className="mx-auto px-6 py-12">
      <SectionHeading>Contact Us</SectionHeading>
      <QueryForm />
    </main>
  );
}