"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ButtonLink from "../shared/ButtonLink";
import SectionHeading from "./SectionHeading";

export default function GalleryPreview() {
  const images = [
   {
      src: "/images/gallery-preview/preview-1.JPEG",
      alt: "Fine line tattoo design at Eden Tattoo Nepal studio in Kathmandu",
    },
    {
      src: "/images/gallery-preview/preview-2.JPEG",
      alt: "Minimalist tattoo artwork created by Eden Tattoo Nepal artist",
    },
    {
      src: "/images/gallery-preview/preview-3.JPEG",
      alt: "Tattoo cover-up transformation at Eden Tattoo Nepal in Thamel Kathmandu",
    },
    {
      src: "/images/gallery-preview/preview-4.JPEG",
      alt: "Custom tattoo design session at Eden Tattoo Nepal studio",
    },
    {
      src: "/images/gallery-preview/preview-5.JPEG",
      alt: "Piercing service at Eden Tattoo Nepal studio in Kathmandu",
    },
    {
      src: "/images/gallery-preview/preview-6.JPEG",
      alt: "Tattoo detail showcasing shading and artistry at Eden Tattoo Nepal",
    },
  ];

  return (
    <section id="gallery" className="py-12 border-b border-white">
<SectionHeading>Sneak Peek</SectionHeading>
      <div className="max-w-6xl mx-auto px-6 bg-gray">

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },   // Tablet
            1024: { slidesPerView: 3 },  // Desktop
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="rounded-lg shadow-lg "
        >
          {images.map(({ src, alt }, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-62.5 sm:h-87.5 md:h-100">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 flex py-2 gap-4 justify-center md:justify-center ">
          <ButtonLink href="/artists" variant="primary" size="md">Meet Our Artists</ButtonLink>
          <ButtonLink href="/gallery" variant="secondary" size="md">Browse Our Gallery</ButtonLink>
        </div>
      </div>
    </section>
  );
}