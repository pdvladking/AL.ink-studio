"use client";
import SectionHeading from "../components/SectionHeading";
import BookingForm from "../features/bookings/BookingForm";

export default function BookingsPage() {
  return (
    <div className="mx-auto px-6 py-16">
      <SectionHeading>Book Your Appointment</SectionHeading>
      <BookingForm />
    </div>
  );
}