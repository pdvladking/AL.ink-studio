"use client";
import { useState } from "react";
import GalleryGrid from "../features/gallery/GalleryGrid";
import galleryData from "../features/gallery/galleryData";
import ButtonLink from "../shared/ButtonLink";

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(galleryData.map((item) => item.category))];

  const filteredItems =
    filter === "All" ? galleryData : galleryData.filter((item) => item.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-linear-to-tl from-neutral-50 to-sky-50">
      <main className="grow w-full max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl sm:text-4xl font-playfair-display font-bold text-neutral-800 text-center mb-12">
          Tattoo Gallery
        </h2>
        <p className="text-neutral-600 mb-12 text-center">
          Explore our recent works — filter by style to find your vibe.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === cat
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-yellow-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <GalleryGrid items={filteredItems} />

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <ButtonLink href="/bookings" variant="primary" size="md">
            Book Your Session
          </ButtonLink>
        </div>
      </main>
    </div>
  );
}