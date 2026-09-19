"use client"
import Image from "next/image";
import ButtonLink from "../shared/ButtonLink";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});



export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row-reverse items-center justify-start text-center bg-black py-2 px-6 border-b border-white pb-8"
    >
      
      <div className="flex-1 flex justify-center border-2 rounded-3xl py-4">
        <Image
          priority
          src="/hero.webp"
          alt="Front view of Eden Tattoo Nepal studio in Thamel Kathmandu"
          width={400}
          height={400}
          fetchPriority="high"
          className="object-contain w-auto h-auto rounded-lg"
        />
      </div>

      
      <div className="flex-1 text-center md:text-center">
         <h1
      className={`${greatVibes.className} py-5 text-4xl md:text-5xl mb-6 leading-tight text-white`}
    >
      Where the tattoo studio feels like you just met your{" "}
      <span className="text-yellow-500">long lost friend.</span>
    </h1>
        <div className="flex py-2 gap-4 justify-center md:justify-center">
          <ButtonLink href="/bookings" variant="primary" size="md">
  Book a session
</ButtonLink>
 <ButtonLink href="/studio" variant="secondary" size="md">
  About Us
</ButtonLink>
        </div>
      </div>
    </section>
  );
}