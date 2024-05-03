import { DarkThemeToggle } from "flowbite-react";
import Header from "./components/header";
import Introduction from "./components/introduction";
import WorkExperience from "./components/work-experience";
import ProjectExperience from "./components/project-experience";
import ContactMe from "./components/contact-me";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      {/* <hr className="mb-5 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr> */}
      <Introduction />
      {/* <div className="h-[16px] bg-gradient-to-b from-cyan-100 to-white"></div>
      <div className="mt-5 h-[16px] bg-gradient-to-b from-white to-emerald-100"></div> */}
      <div className="flex flex-row">
        <WorkExperience />
        <ProjectExperience />
      </div>

      <ContactMe />

    </div>
  );
}
