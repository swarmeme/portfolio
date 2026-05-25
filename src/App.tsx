import { useRef } from "react";

import Hero from "./components/hero";
import Highlights from "./components/highlights";
import Experiments from "./components/experiments";
import TechStack from "./components/techstack";
import Contact from "./components/contact";

function App() {
  const workRef = useRef<HTMLElement>(null);

  return (
    <main className="relative bg-[#0A0A0A] text-white overflow-x-hidden min-h-screen">

      {/* HERO */}
      <Hero workRef={workRef} />

      {/* CONTENT */}
      <div className="relative flex flex-col gap-8 md:gap-12">

        <Highlights sectionRef={workRef} />

        <TechStack />

        <Experiments />

        <Contact />


      </div>

    </main>
  );
}

export default App;