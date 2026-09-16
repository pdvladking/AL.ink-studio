"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = 40 }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/LOGO 1.svg"
        alt="Al ink studio Logo"
        width={size}
        height={size}
        priority
        className="rounded-full"
      />
    </Link>
  );
}