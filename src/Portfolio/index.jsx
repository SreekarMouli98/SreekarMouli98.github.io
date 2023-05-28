import React from "react";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import FullPage from "./components/FullPage";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Socials from "./components/Socials";

function Portfolio() {
  return (
    <div>
      <Header />
      <Socials />
      <FullPage>
        <About />
      </FullPage>
      <FullPage>
        <Experience />
      </FullPage>
      <FullPage>
        <Projects />
      </FullPage>
      <FullPage>
        <Contact />
      </FullPage>
    </div>
  );
}

export default Portfolio;
