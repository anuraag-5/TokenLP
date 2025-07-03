import Image from "next/image";
import Navbar from "../components/Navbar";
import LandingMainSection from "../components/LandingMainSection";

const Landingpage = () => {
  return (
    <>
      <Image
        src="/hero-bg.jpg"
        alt="hero-bg"
        fill
        className="object-cover scale-y-[-1] -z-10"
      />
      <div className="min-h-screen min-w-screen">
        <Navbar />
        <LandingMainSection />
      </div>
    </>
  );
};

export default Landingpage;
