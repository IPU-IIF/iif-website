import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import DataCounter from "../Components/DataCounter";
import Overview from "../components/Overview"
import Benefits from "../components/Benefits"
import Directors from "../components/directors";
import EmailSection from "../components/contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>

      <NavBar /> 
      <HeroSection />
      <DataCounter />
      <Overview />
      <Benefits />
      <Directors/>
      <EmailSection/>
      <Footer />

    </>
  );
}
