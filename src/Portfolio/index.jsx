import React from "react";

import FullPage from "./components/FullPage";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import Socials from "./components/Socials";
import { allPages } from "./utils";

function Portfolio() {
  return (
    <div className="tw-p-4">
      <Header />
      <Socials />
      <div className="tw-px-20">
        <FullPage>
          <Intro />
        </FullPage>
        {allPages.map(({ name, Component }) => (
          <FullPage key={name}>
            <Component />
          </FullPage>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
