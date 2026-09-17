'use client';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
});

export default function SectionHeading({ children }) {
  return (
    <h2
      className={`${greatVibes.className} text-3xl md:text-4xl font-bold mb-12 text-center text-white underline underline-offset-4 decoration-amber-300`}
    >
      {children}
    </h2>
  );
}
