import Hero from "../components/Hero";
import Features from "../components/Features";
import Examples from "../components/Examples/Examples";
import Pricing from "../components/Pricing/Pricing";
import FAQ from "../components/FAQ/FAQ";
import Layout from "../components/layout/layout";

export default function HomePage() {
  return (
    <div className="global-bg min-h-screen text-white">
      <Layout>
        <main className="pt-24">
          <Hero />
          <Features />
          <Examples />
          <Pricing />
          <FAQ />
        </main>
      </Layout>
    </div>
  );
}
