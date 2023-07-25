import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Gap from "../components/Gap";

import introMdFile from "../data/intro.md";

function About() {
  const [introMd, setIntroMd] = useState("");

  useEffect(() => {
    fetch(introMdFile)
      .then((response) => response.text())
      .then((text) => setIntroMd(text));
  });

  return (
    <div id="About">
      <Gap />
      <Gap />
      <ReactMarkdown
        className={[
          "tw-prose",
          "lg:tw-prose-2xl",
          "tw-text-lightInitial",
          "dark:tw-text-darkInitial",
          "prose-headings:tw-text-lightInitial",
          "prose-headings:dark:tw-text-darkInitial",
          "prose-a:tw-text-lightInitial",
          "prose-a:dark:tw-text-darkInitial",
          "hover:prose-a:tw-text-lightSecondary",
          "hover:prose-a:dark:tw-text-darkSecondary",
        ].join(" ")}
      >
        {introMd}
      </ReactMarkdown>
    </div>
  );
}

export default About;
