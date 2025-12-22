import { About } from "../../components/About";
import { Articles } from "../../components/Articles";
import { Contact } from "../../components/Contact";
import Hero from "../../components/Hero";
import { PracticeAreas } from "../../components/PracticeAreas";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PracticeAreas />
      <Articles />
      <Contact />
    </>
  );
}
