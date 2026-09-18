"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Input from "@/app/shared/Input";
import Button from "@/app/shared/Button";

const fields = [
  { name: "name", label: "Name", type: "text", required: "Name is required", maxLength: { value: 50, message: "Name too long (max 50)" } },
  { name: "email", label: "Email", type: "email", required: "Email is required", maxLength: { value: 50, message: "Email too long (max 50)" }, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" } },
  { name: "phone", label: "Phone", type: "tel", maxLength: { value: 20, message: "Phone too long (max 20)" } },
  { name: "date", label: "Preferred Date", type: "date" },
  { name: "time", label: "Preferred Time", type: "time" },
  { name: "day", label: "Day of Week", type: "text", maxLength: { value: 20, message: "Day too long (max 20)" } },
  { name: "style", label: "Tattoo Style", type: "text", placeholder: "e.g. Blackwork, Realism", maxLength: { value: 50, message: "Style too long (max 50)" } },
  {
    name: "deposit",
    label: "Deposit",
    type: "number",
    placeholder: "Enter deposit amount",
    validate: (value) => {
      if (!value) return true; 
      if (value < 10) return "Deposit must be at least 10";
      if (value > 5000) return "Deposit cannot exceed 5000";
      return true;
    },
  },
  { name: "message", label: "Message", type: "textarea", required: "Message is required", maxLength: { value: 500, message: "Message too long (max 500)" }, placeholder: "Describe your tattoo idea ..." },
];

export default function BookingForm() {
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
      setModalMessage("Sending your booking request...");
      setShowModal(true);

      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "booking" }),
      });

      if (!res.ok) throw new Error("Request failed");

      reset();
      setModalMessage("✅ Booking Confirmed! Owner has been notified.");
    } catch (err) {
      console.error("Booking error:", err);
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
        {fields.map(({ name, label, type, placeholder, ...rules }) => (
          <div key={name}>
            <Input
              name={name}
              type={type}
              label={label}
              placeholder={placeholder}
              {...register(name, rules)} 
            />
            {errors[name] && (
              <p className="text-red-600 text-sm">{errors[name].message}</p>
            )}
          </div>
        ))}

        <Button type="submit" variant="primary" size="md">
          {isSubmitting ? "Booking ..." : "Book Appointment"}
        </Button>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-neutral-50 rounded-xl shadow-lg px-6 py-8 max-w-sm w-full text-center">
            {isSubmitting ? (
              <>
                <div className="border-4 border-sky-400 border-t-transparent rounded-full w-8 h-8 mx-auto animate-spin"></div>
                <p className="mt-4 text-neutral-700">Sending your booking request...</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-playfair-display font-bold mb-4 text-neutral-800">
                  Booking Status
                </h2>
                <p className="mb-6 text-neutral-700">{modalMessage}</p>
                {modalMessage.startsWith("✅") ? (
                  <Button onClick={() => router.push("/")} variant="primary" size="md">
                    Go to Homepage Now
                  </Button>
                ) : (
                  <Button onClick={() => setShowModal(false)} variant="primary" size="md">
                    Close
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}