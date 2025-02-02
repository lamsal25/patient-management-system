import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Card from "./components/card/Card";
import Testimonials from "./components/testimonials/Testimonials";
import HowItWorks from "./components/howItWorks/HowItWorks";

export default function Home() {
  return (
     <div>
      <Navbar/>
    <Hero/>
    <Card/>
   <Testimonials/>
   <HowItWorks/>
     </div>
  );
}
