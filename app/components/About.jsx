// "use client";
// import Image from "next/image";
// import ButtonLink from "../shared/ButtonLink";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="flex flex-col items-center bg-py-16 px-6"
//     >
//       {/* Text */}
//       <div className="max-w-3xl text-center mb-8">
//         <h2 className="text-3xl font-playfair-display font-bold  text-center text-neutral-700 ">
//           Eden Tattoo Nepal – Serving Thamel, Kathmandu since 2015

//         </h2>
//       </div>

//       {/* Image */}
//       <div className="flex justify-center mb-8">
//         <Image
//           priority
//           src="/images/aboutp.webp"
//           alt="Interior of Eden Tattoo Nepal studio in Thamel Kathmandu"
//           width={400}
//           height={400}
//           className="object-contain w-auto h-auto rounded-lg shadow-lg"
//         />
//       </div>

//       {/* CTA */}
//       <div className="flex gap-4 justify-center">
//         <ButtonLink href="/contact">Contact Eden Tattoo Nepal</ButtonLink>
//       </div>
//     </section>
//   );
// }