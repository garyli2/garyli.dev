const Navigation = () => {
  return (
    <div className="mt-6 flex gap-10">
      <a className="text-xl hover:animate-pulse" href="./projects">
        Experiences
      </a>
      <a className="text-xl hover:animate-pulse" href="./projects">
        Projects
      </a>
      <a className="text-xl hover:animate-pulse" href="./projects">
        Contact
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <div className="mx-auto bg-white px-4 py-10">
      <div className="mx-auto flex max-w-screen-md flex-col items-center justify-center">
        <div className="flex flex-row items-baseline gap-3 md:gap-5">
          <h1 className="text-4xl font-extrabold text-black md:text-7xl">Gary Li</h1>
          <h2 className="overflow-hidden whitespace-nowrap text-lg text-gray-600 md:text-4xl">
            Full Stack Developer
          </h2>
        </div>

        {/* <Navigation /> */}
      </div>
    </div>
  );
};
export default Header;
