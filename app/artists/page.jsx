"use client";
import SectionHeading from "../components/SectionHeading";
import ArtistCard from "../features/artists/ArtistCard";
import { artistsData } from "../features/artists/artistsData";
import ButtonLink from "../shared/ButtonLink";

export default function ArtistPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="grow max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading>Meet Our Artists</SectionHeading>

        {/* Artist grid section */}
        <section
          aria-label="Tattoo artists"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {artistsData.map((artist, i) => (
            <ArtistCard key={i} {...artist} />
          ))}
        </section>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <ButtonLink href="/bookings" variant="primary" size="md">
            Book with an Artist
          </ButtonLink>
        </div>
      </main>
    </div>
  );
}