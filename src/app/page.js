import Benefits from "@/components/Benefits";
import DataCounter from "@/components/DataCounter";
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
      <Footer />

    </>
  );
}
