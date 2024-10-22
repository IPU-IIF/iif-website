import Benefits from "@/components/Benefits";
import DataCounter from "@/components/DataCounter";
import Footer from "@/components/Footer";
// import NavBar from "@/components/NavBar";
import Overview from "@/components/Overview";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>

      {/* <NavBar /> */}
      <HeroSection />
      <DataCounter />
      <Overview />
      <Benefits />
      <Footer />

    </>
  );
}
