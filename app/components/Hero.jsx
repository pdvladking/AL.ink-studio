"use client"
import Image from "next/image";
import ButtonLink from "../shared/ButtonLink";



export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row-reverse items-center justify-start text-center bg-linear-to-tl from-neutral-50 to-sky-50 text-white py-2 px-6 "
    >
      
      <div className="flex-1 flex justify-center py-4">
        <Image
          priority
          src="/images/hero.webp"
          alt="Front view of Eden Tattoo Nepal studio in Thamel Kathmandu"
          width={400}
          height={400}
          fetchPriority="high"
          className="object-contain w-auto h-auto rounded-lg"
        />
      </div>

      
      <div className="flex-1 text-center md:text-center">
        <h1 className="font-playfair-display hero-title text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-neutral-700">
          Ink your Story Boldly.{" "}
        </h1>

        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mb-8">
           A premier tattoo studio in Thamel, Kathmandu, Nepal. 
  We specialize in custom tattoos and unforgettable designs.

        </p>

        <div className="flex py-2 gap-4 justify-center md:justify-center">
          <ButtonLink href="/bookings" variant="primary" size="md">
  Book a session
</ButtonLink>
 <ButtonLink href="/studio" variant="secondary" size="md">
  Explore Studio
</ButtonLink>
        </div>
      </div>
    </section>
  );
}