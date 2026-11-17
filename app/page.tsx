import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Services } from "@/components/Services";
import { Results } from "@/components/Results";
import { Finishes } from "@/components/Finishes";
import { Process } from "@/components/Process";
import { Cta } from "@/components/Cta";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { RevealObserver } from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="topo">
        <Hero />
        <Ticker />
        <Services />
        <Results />
        <Finishes />
        <Process />
        <Cta />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
      <RevealObserver />
    </>
  );
}
