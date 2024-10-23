import NavBar from "../components/NavBar.jsx";
import HeroSection from "../components/HeroSection";
import DataCounter from "../Components/DataCounter";
import Overview from "../components/Overview";
import Benefits from "../components/Benefits";
import Directors from "../components/directors";
import EmailSection from "../components/contact";
import Footer from "../components/Footer";
import FeaturedStartups from "../components/FeaturedStartups.jsx";
//import NewsAndUpdates from "../components/NewsAndUpdates.jsx";
import EventsGrid from "../components/EventsGrid.jsx";
export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <DataCounter />
      <Overview />
      <Benefits />
      <FeaturedStartups />
      <EventsGrid />
      <Directors />

      <EmailSection />
      <Footer />
    </>
  );
}
