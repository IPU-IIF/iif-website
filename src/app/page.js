import DataCounter from "../Components/DataCounter";
import NavBar from "../components/NavBar";
import Overview from "../components/Overview";
import Benefits from "../components/Benefits";
import Directors from "../components/directors";
import EmailSection from "../components/contact";
import Footer from "../components/Footer";
import FeaturedStartups from "../components/FeaturedStartups";

export default function Home() {
  return (
    <>
      <NavBar />
      <DataCounter />
      <Overview />
      <Benefits />
      <FeaturedStartups></FeaturedStartups>
      <Directors />
      <EmailSection />
      <Footer />
    </>
  );
}
