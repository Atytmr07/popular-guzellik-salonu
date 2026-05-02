import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { AllServices } from "../components/sections/AllServices";
import { Staff } from "../components/sections/Staff";
import { Gallery } from "../components/sections/Gallery";
import { VideoHighlight } from "../components/sections/VideoHighlight";
import { Reviews } from "../components/sections/Reviews";
import { Contact } from "../components/sections/Contact";

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
        <VideoHighlight />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
