
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InvestYourWay from "@/components/InvestYourWay";
import TradeWithoutLimits from "@/components/TradeWithoutLimits";
import WhyWeAreDifferent from "@/components/WhyWeAreDifferent";
import MarketAnalysis from "@/components/MarketAnalysis";
import Footer from "@/components/Footer";
import WhyDifferent from "@/components/WhyDifferent";
import FastFunding from "@/components/FastFunding";
import TradingSteps from "@/components/TradingSteps";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <InvestYourWay />
      <TradeWithoutLimits />
      <WhyDifferent />
      <MarketAnalysis />
      <FastFunding />
      <TradingSteps />
      <FAQ />
      <Footer />
    </main>
  );
}
