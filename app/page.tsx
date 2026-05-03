import type { Metadata } from "next";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { AllServices } from "../components/sections/AllServices";
import { Staff } from "../components/sections/Staff";
import { Gallery } from "../components/sections/Gallery";
import { Reviews } from "../components/sections/Reviews";
import { Contact } from "../components/sections/Contact";

export const metadata: Metadata = {
  other: {
    "geo.region": "TR-07",
    "geo.placename": "Kepez, Antalya",
    "geo.position": "36.9407186;30.6757573",
    "ICBM": "36.9407186, 30.6757573",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <AllServices />
        <Staff />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
