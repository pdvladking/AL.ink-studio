"use client";
import Image from "next/image";

export default function ArtistCard({ name, bio, image, socials }) {
  return (
    <div className="bg-neutral-900 shadow-md rounded-lg p-6 text-center overflow-hidden">
      {/* Artist image (fixed height, responsive fill) */}
      {image ? (
        <div className="relative w-full h-64 mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-lg border-2 border-white"
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
      ) : (
        // Fallback to keep card heights consistent if no image
        <div className="w-full h-64 mb-4 rounded-lg bg-neutral-100" />
      )}

      {/* Name + Bio */}
      <h3 className="text-lg font-semibold text-white underline decoration-amber-400 mb-2">{name}</h3>
      <p className="text-sm text-white">{bio}</p>

      {/* Socials */}
      {socials?.length ? (
        <div className="flex justify-center gap-4 mt-4 text-xl text-yellow-600">
          {socials.map(({ href, icon: IconBase, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-yellow-500 transition transform hover:scale-110"
            >
              <IconBase />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}