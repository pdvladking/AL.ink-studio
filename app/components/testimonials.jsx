"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ButtonLink from "../shared/ButtonLink";
import Image from "next/image";
import "swiper/css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nafisa Tamrakar",
      text: "Travelled all the way from London to get Tattooed here! The artists are super friendly, they make sure you’re comfortable by not only making sure you’re happy with your tattoo but also get you tea/coffee. The studio itself is super clean and they stick to the highest standards with all equipment!",
      avatar: "/images/testimonials-preview/nafisa-avatar.png",
    },
    {
      name: "Brett Allan",
      text: "Wonderful experience with Eden Tattoo. Their service was exceptional—friendly staff, very clean studio, and amazing skills. I love my tattoo, which was designed from a photo I took the morning I reached Thorong La Pass.",
      avatar: "/images/testimonials-preview/bret-avatar.png",
    },
    {
      name: "Neha",
      text: "After 10 years of debating, I had the pleasure of getting my first tattoo at Eden Tattoo in Thamel. The staff there were extremely helpful—they kept the atmosphere light and fun to ease my anxiety. My tattoo artist collaborated with me on the design and offered professional tips to get the final design—which I absolutely adore!",
      avatar: "/images/testimonials-preview/neha-avatar.png",
    },
    {
      name: "Suraj Rawal",
      text: "Best tattoo studio in Thamel. Highly recommend. Neat and clean. Professional artist. Artist listened to my idea and created a beautiful design.",
      avatar: "/images/testimonials-preview/suraj-avatar.webp",
    },
    {
      name: "Louisa Reimann",
      text: "5 stars! The owner is very kind, and the girl who did the piercings is super cool. I can 100% recommend Eden Tattoo for tattoos and piercings. I got a big piece and three piercings 💖.",
      avatar: "/images/testimonials-preview/louisa-avatar.webp",
    },
    {
      name: "Nirajan Shrestha",
      text: "I did a cover-up and the results were absolutely amazing—fully satisfied! I also got a tiger tattoo on my leg, and it turned out incredible. Highly recommend Eden Tattoo. Super professional, hygienic studio, and chill environment.",
      avatar: "/images/testimonials-preview/nirajan-avatar.webp",
    },
    {
      name: "Sanju Khadka",
      text: "Got my tattoo done at this place and I’m really happy with the result! It turned out exactly how I wanted—clean, detailed, and just perfect. The team was friendly, and made the whole experience super comfortable. Great service and great vibes. Highly recommend!",
      avatar: "/images/testimonials-preview/sanju-avatar.webp",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-linear-to-tl from-neutral-50 to-sky-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-playfair-display font-bold text-center mb-12 text-neutral-700">
          Testimonials
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={30}
          loop
          freeMode={true}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          speed={1000} 
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="w-[300px]">
              <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between h-full text-center">
                {t.avatar && (
                  <Image
  src={t.avatar}
  alt={`Avatar of ${t.name}, Eden Tattoo Nepal client`}
  width={64}
  height={64}
  loading="lazy"
  style={{ objectFit: 'cover'}}
  className="w-16 h-16 rounded-full mx-auto mb-4 ring-2 ring-neutral-200 over"
/>
                )}
                <p className="text-neutral-600 italic mb-4 line-clamp-5">
                  "{t.text}"
                </p>
                <span className="font-playfair-display font-semibold text-neutral-800">
                  {t.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
<div className="mt-10 flex justify-center">
      <ButtonLink href="/testimonials" variant="primary" size="md">
        Read More Testimonials
      </ButtonLink>
    </div> 
      </div>
    </section>
  );
}