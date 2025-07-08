import Header from "./components/header";
import Introduction from "./components/introduction";
import WorkExperience from "./components/work-experience";
import ProjectExperience from "./components/project-experience";
import ContactMe from "./components/contact-me";

const Home = () => {
  return (
    <div className="p-5 bg-white dark:bg-[#181C14] xl:px-20 flex flex-col gap-10">
      <Header />
      <Introduction />
      <div className="grid grid-cols-1 gap-10 2xl:gap-0 2xl:grid-cols-2 ">
        <WorkExperience />
        <ProjectExperience />
      </div>
      <ContactMe />
    </div>
  );
}

export default Home;
