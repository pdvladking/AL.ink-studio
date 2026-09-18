"use client";
import QueryForm from "../features/contact/QueryForm";

export default function ContactPage() {
  return (
    <main className="mx-auto px-6 py-12 bg-linear-to-tl from-neutral-50 to-sky-50">
      <h1 className="text-3xl font-playfair-display font-bold mb-8 text-center text-neutral-800">Contact Us</h1>
      <QueryForm />
    </main>
  );
}