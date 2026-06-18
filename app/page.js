// app/page.js
import Hero from "./components/Hero";
import ServicesSection from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/testimonials";

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
      <ServicesSection />
      <About />
      <Gallery />
      <Testimonials />
    </main>
  );
}