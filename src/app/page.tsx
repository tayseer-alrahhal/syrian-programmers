import Footer from "@/components/Footer";
import  Fields from "../components/Fields";
import HeroT from "@/components/HeroT";
import OurVision from "@/components/OurVision";
import Suggestions from "@/components/Suggestions";

export default function Home() {
  return (
    <div>
      <HeroT />
      <OurVision />
      <Fields />
      <Suggestions />
      <Footer />
    </div>
  );
}
