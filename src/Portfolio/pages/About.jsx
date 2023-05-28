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
      <Heading>01. about me</Heading>
      <Gap />
      <ReactMarkdown className="tw-prose lg:tw-prose-2xl">
        {aboutMd}
      </ReactMarkdown>
      <Gap />
    </div>
  );
}

export default About;
