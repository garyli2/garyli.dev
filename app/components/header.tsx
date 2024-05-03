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
        <div className="flex flex-row items-baseline gap-5">
          <h1 className="text-7xl font-extrabold text-black">Gary Li</h1>
          <h3 className="overflow-hidden whitespace-nowrap text-4xl text-gray-600">
            Full Stack Developer
          </h3>
        </div>

        {/* <Navigation /> */}
      </div>
    </div>
  );
};
export default Header;
