import Header from "./components/header";
import Introduction from "./components/introduction";
import WorkExperience from "./components/work-experience";
import ProjectExperience from "./components/project-experience";
import ContactMe from "./components/contact-me";

export default function Home() {
  return (
    <div className="mx-5 bg-white md:mx-20">
      <Header />
      <Introduction />
      <div className="relative mt-10 flex flex-col justify-center gap-10 lg:flex-row">
        <WorkExperience />
        <ProjectExperience />
      </div>

      <ContactMe />

    </div>
  );
}
