// app/page.js
import Hero from "./components/Hero";
// import About from "./components/About";
import Gallery from "./components/Gallery";
import ServicesSection from "./components/Services";
import Paintings from "./components/Paintings"
// import Testimonials from "./components/testimonials";

// ✅ Page-specific SEO metadata
export const metadata = {
  title: "Eden Tattoo Nepal | Tattoo Studio in Thamel",
  description:
    "Professional tattoo and piercing studio in Thamel, Kathmandu. Clean, safe, and creative.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <About /> */}
      <Gallery />
      <ServicesSection />
      <Paintings />
      {/* <Testimonials /> */}
    </main>
  );
}