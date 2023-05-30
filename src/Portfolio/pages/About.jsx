import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import aboutMdFile from "../data/about.md";
import Gap from "../components/Gap";
import Heading from "../components/Heading";

function About() {
  const [aboutMd, setAboutMd] = useState("");

  useEffect(() => {
    fetch(aboutMdFile)
      .then((response) => response.text())
      .then((text) => setAboutMd(text));
  });

  return (
    <div id="about">
      <Gap />
      <Heading>01. about me</Heading>
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
        {aboutMd}
      </ReactMarkdown>
      <Gap />
    </div>
  );
}

export default About;
