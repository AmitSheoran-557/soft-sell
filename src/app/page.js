import ChooseUs from "./components/ChooseUs";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}
