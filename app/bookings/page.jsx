"use client";
import BookingForm from "../features/bookings/BookingForm";

export default function BookingsPage() {
  return (
    <div className="mx-auto px-6 py-16 bg-linear-to-tl from-neutral-50 to-sky-50">
      <h2 className="text-3xl sm:text-4xl font-playfair-display font-bold text-neutral-800 text-center mb-12">
        Book Your Appointment
      </h2>
      <BookingForm />
    </div>
  );
}