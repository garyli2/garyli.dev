const Header = () => {
  return (
    <div className="mx-auto flex max-w-screen-md flex-col items-center justify-center mt-5">
      <div className="flex flex-col items-center gap-3 md:flex-row md:items-baseline md:gap-5">
        <h1 className="text-nowrap text-6xl font-extrabold text-black dark:text-white xl:text-7xl">Gary Li</h1>
        <h2 className="overflow-hidden whitespace-nowrap text-3xl text-gray-600 dark:text-gray-300 xl:text-4xl">
          Full Stack Developer
        </h2>
      </div>
    </div>
  );
};
export default Header;
