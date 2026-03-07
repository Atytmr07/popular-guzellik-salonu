import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Motto } from "../components/sections/Motto";
import { Services } from "../components/sections/Services";
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
        <Motto />
        <Services />
        <Gallery />
        <VideoHighlight />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
