import React, { useState } from "react";

import FullPage from "./components/FullPage";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import Socials from "./components/Socials";
import { allPages } from "./utils";

function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "tw-dark" : ""}>
      <div
        // className="tw-p-4 tw-text-lightInitial dark:tw-text-darkInitial tw-bg-lightPrimary dark:tw-bg-darkPrimary"
        className={[
          "tw-p-4",
          "tw-text-lightInitial",
          "dark:tw-text-darkInitial",
          "tw-bg-lightPrimary",
          "dark:tw-bg-darkPrimary",
          "tw-font-body",
        ].join(" ")}
      >
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
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
    </div>
  );
}

export default Portfolio;
