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
              alt="Tattoo studio interior in Thamel, Kathmandu"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left">
            <p className="text-neutral-600 leading-relaxed mb-6">
              Eden Tattoo Studio, located in the heart of Thamel, Kathmandu, is a 
              premium destination for tattoos and piercings. Our artists combine 
              creativity, professionalism, and hygiene standards to deliver 
              unforgettable experiences. Whether it’s your first tattoo or a 
              large custom piece, we make sure every client feels comfortable, 
              respected, and proud of their art.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              We specialize in diverse styles — from blackwork and realism to 
              traditional and custom designs. Our studio is built on trust, 
              passion, and a commitment to excellence. Every tattoo tells a 
              story, and we’re here to help you tell yours.
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