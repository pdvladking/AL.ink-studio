"use client";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

export default function GalleryModal({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeys = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Prevent closing when clicking inside */}
      <div
        className="max-w-3xl w-full px-4 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-yellow-400 text-2xl hover:text-yellow-500"
        >
          <FaTimes />
        </button>

        <img
          src={item.src}
          alt={item.alt}
          className="mx-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
        />
        <p className="mt-4 text-gray-200">{item.alt}</p>

        {/* Navigation */}
        <div className="flex justify-between mt-6 text-white text-3xl">
          <button onClick={onPrev} className="hover:text-yellow-500">
            <FaArrowLeft />
          </button>
          <button onClick={onNext} className="hover:text-yellow-500">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}