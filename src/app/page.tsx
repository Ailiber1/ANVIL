import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Programs from "@/components/Programs";
import Trainer from "@/components/Trainer";
import Results from "@/components/Results";
import Voice from "@/components/Voice";
import Price from "@/components/Price";
import Studio from "@/components/Studio";
import Flow from "@/components/Flow";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MobileFixedCTA from "@/components/MobileFixedCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div id="hero-section">
          <Hero />
        </div>
        <Concept />
        <Programs />
        <Trainer />
        <Results />
        <Voice />
        <Price />
        <Studio />
        <Flow />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileFixedCTA />
    </>
  );
}
