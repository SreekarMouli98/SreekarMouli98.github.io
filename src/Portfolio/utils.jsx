import {
  ImGithub as GithubIcon,
  ImStackoverflow as StackoverflowIcon,
  ImLinkedin as LinkedinIcon,
} from "react-icons/im";
import { MdOpenInNew as OpenIcon } from "react-icons/md";
import { AiOutlineGitlab as GitlabIcon } from "react-icons/ai";
import { FaBlogger as BlogIcon } from "react-icons/fa";
import { SiNpm as NPMIcon } from "react-icons/si";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

export const allPages = [
  { name: "about", Component: About },
  { name: "experience", Component: Experience },
  { name: "projects", Component: Projects },
  { name: "contact", Component: Contact },
];

export const getIcon = (name) => {
  name = name.toLowerCase();
  if (name === "github") return <GithubIcon />;
  if (name === "stackoverflow") return <StackoverflowIcon />;
  if (name === "linkedin") return <LinkedinIcon />;
  if (name === "open") return <OpenIcon />;
  if (name === "gitlab") return <GitlabIcon />;
  if (name === "blog") return <BlogIcon />;
  if (name === "npm") return <NPMIcon />;
};
