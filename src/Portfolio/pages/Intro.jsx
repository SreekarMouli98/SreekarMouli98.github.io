import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

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
      <ReactMarkdown className="tw-prose lg:tw-prose-2xl tw-pt-20">
        {introMd}
      </ReactMarkdown>
    </div>
  );
}

export default About;
