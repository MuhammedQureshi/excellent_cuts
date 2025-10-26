import Image from "next/image";
import Hero from "../../components/Hero";
import ServicesPreview from "../../components/ServicesPreview";
import AboutUs from "../../components/AboutUs";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <ServicesPreview />
    </div>
  );
}
