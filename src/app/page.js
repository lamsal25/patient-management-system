import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Card from "./components/card/Card";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
     <div>
      <Navbar/>
    <Hero/>
    <Card/>
    <Footer/>
     </div>
  );
}
