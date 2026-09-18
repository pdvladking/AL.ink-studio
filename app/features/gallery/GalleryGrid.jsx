"use client";
import { useState } from "react";
import GalleryItem from "./GalleryItem";
import GalleryModal from "./GalleryModal";

export default function GalleryGrid({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (i) => setActiveIndex (i);
  const closeModal = () => setActiveIndex (null);
  const prevItem = () => setActiveIndex ((i) => (i > 0 ? i-1 : items.length -1 ));
  const nextItem = () => setActiveIndex ((i) => (i < items.length -1 ? i + 1 : 0));

  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div key={i} onClick={() => openModal(i)} className="cursor-pointer">
          <GalleryItem {...item} />
        </div>
      ))}
    </div>

    {activeIndex !== null && (
      <GalleryModal
      item={items[activeIndex]}
      onClose={closeModal}
      onPrev={prevItem}
      onNext={nextItem}
      />
    )}
    </>
  )
}