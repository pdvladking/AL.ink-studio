"use client";
import Image from "next/image";
import ButtonLink from "../shared/ButtonLink";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-16 bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <SectionHeading>AL.Ink Studio</SectionHeading>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Studio Image */}
          <div className="relative w-full h-[350px] md:h-[450px]">
            <Image
              src="/images/studio.webp"
              alt="Tattoo studio interior in Ranibari, Kathmandu"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left">
            <p className="text-neutral-600 leading-relaxed mb-6">
              At AL.Ink Studio, we believe tattoos are more than ink — they’re stories etched into skin, symbols of identity, and art that lasts a lifetime.

Founded in Ranibari, Kathmandu, our studio is a fresh space where creativity meets professionalism. Though newly established, our mission is clear: to provide a safe, welcoming environment where every client feels confident expressing themselves through body art.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              We aim to grow into a hub for tattoo culture in Kathmandu — blending modern techniques with timeless artistry, and building a community of clients who see their tattoos as personal milestones
            </p>

            {/* CTA Buttons */}
            <div className="flex py-2 gap-4 justify-center md:justify-start">
                        <ButtonLink href="/bookings" variant="primary" size="md">
                Book Now
              </ButtonLink>
               <ButtonLink href="/gallery" variant="secondary" size="md">
                View Our Work
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}