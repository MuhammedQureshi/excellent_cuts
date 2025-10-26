import Image from "next/image";
import Hero from "../../components/Hero";
import ServicesPreview from "../../components/ServicesPreview";
import AboutUs from "../../components/AboutUs";
import Gallery from "../../components/Gallery";
import Reviews from "../../components/Reviews";
import Cta from "../../components/Cta";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <ServicesPreview />
      <Gallery />
      <Reviews />
      <Cta />
    </div>
  );
}
