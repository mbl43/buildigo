import Hero from "@/component/Hero";
import Portfolio from "@/component/Portfolio";
import Process from "@/component/Process";
import Experience from "@/component/Experience";
import Team from "@/component/Team"
import Footer from "@/component/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <Portfolio/>
      <Process/>
      <Experience/>
      <Team/>
      <Footer/>
    </main>
  );
}
