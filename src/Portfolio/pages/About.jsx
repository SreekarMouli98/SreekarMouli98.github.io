import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import aboutMdFile from "../data/about.md";

function About() {
  const [aboutMd, setAboutMd] = useState("");

  useEffect(() => {
    fetch(aboutMdFile)
      .then((response) => response.text())
      .then((text) => setAboutMd(text));
  });

  return (
    <div id="About">
      <h2>About</h2>
      <ReactMarkdown>{aboutMd}</ReactMarkdown>
    </div>
  );
}

export default About;
