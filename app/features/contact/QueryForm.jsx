"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/app/shared/Input";
import Button from "@/app/shared/Button";

const fields = [
  { name: "name", label: "Name", type: "text", required: true, maxLength: 50 },
  { name: "email", label: "Email", type: "email", required: true, maxLength: 50, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  { name: "phone", label: "Phone", type: "tel", maxLength: 20 },
  { name: "message", label: "Message", type: "textarea", required: true, maxLength: 500, placeholder: "Write your query here..." },
];

export default function QueryForm() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setModalMessage("Sending your query...");
      setShowModal(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "contact" }),
      });

      if (!res.ok) throw new Error("Request failed");

      reset();
      setModalMessage("✅ Query Sent! We’ve received your message.");
    } catch (err) {
      console.error("Contact error:", err);
      setModalMessage("❌ Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (showModal && modalMessage.startsWith("✅")) {
      const timer = setTimeout(() => {
        router.push("/"); 
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal, modalMessage, router]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
        {fields.map(({ name, label, type, required, placeholder, maxLength, pattern }) => (
          <div key={name}>
            <Input
              name={name}
              type={type}
              label={label}
              placeholder={placeholder}
              {...register(name, {
                required: required ? `${label} is required` : undefined,
                maxLength: maxLength ? { value: maxLength, message: `${label} too long (max ${maxLength})` } : undefined,
                pattern: pattern ? { value: pattern, message: "Invalid email format" } : undefined,
              })}
            />
            {errors[name] && (
              <p className="text-red-600 text-sm">{errors[name].message}</p>
            )}
          </div>
        ))}

        <Button type="submit" variant="primary" size="md">
          {isSubmitting ? "Sending..." : "Send Query"}
        </Button>
      </form>

      {/* ✅ Modal with spinner + confirmation */}
      {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-neutral-50 rounded-xl shadow-lg px-6 py-8 max-w-sm w-full text-center">
      {isSubmitting ? (
        <>
          <div className="border-4 border-sky-400 border-t-transparent rounded-full w-8 h-8 mx-auto animate-spin"></div>
          <p className="mt-4 text-neutral-700">Sending your query...</p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-playfair-display font-bold mb-4 text-neutral-800">
            Query Status
          </h2>
          <p className="mb-6 text-neutral-700">{modalMessage}</p>
          <Button onClick={() => router.push("/")} variant="primary" size="md">
            Go to Homepage Now
          </Button>
        </>
      )}
    </div>
  </div>
)}
    </>
  );
}