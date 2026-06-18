import { FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function TestimonialCard({ name, quote, rating, date, image }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={`${name}'s photo`}
          className="w-12 h-12 rounded-full object-cover mr-3"
        />
        <div>
          <h3 className="font-semibold text-neutral-800">{name}</h3>
          <p className="text-sm text-neutral-500">{date}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-neutral-700 leading-relaxed mb-4">“{quote}”</p>

      {/* Trust Badge */}
      <div className="flex items-center text-sm text-neutral-500 mt-auto">
        <FaGoogle className="text-red-500 mr-1" />
        via Google Reviews
      </div>
    </div>
  );
}