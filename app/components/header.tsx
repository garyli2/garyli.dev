const Header = () => {
  return (
    <div className="mx-auto bg-white flex max-w-screen-md flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-3 md:flex-row md:items-baseline md:gap-5">
        <h1 className="text-nowrap text-6xl font-extrabold text-black xl:text-7xl">Gary Li</h1>
        <h2 className="overflow-hidden whitespace-nowrap text-3xl text-gray-600 xl:text-4xl">
          Full Stack Developer
        </h2>
      </div>
    </div>
  );
};
export default Header;
