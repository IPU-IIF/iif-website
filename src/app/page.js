import Benefits from "@/components/Benefits";
import EmailSection from "@/components/contact";
import DataCounter from "@/components/DataCounter";
import Directors from "@/components/directors";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <>

      <NavBar />
      <DataCounter />
      <Overview />
      <Benefits />
      <Directors/>
      <EmailSection/>
      <Footer />

    </>
  );
}
