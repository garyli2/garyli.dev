const Header = () => {
  return (
    <div className="pt-8 pb-2 flex flex-col gap-2">
      <div className="flex flex-row items-baseline justify-center gap-10">
        <h1 className="text-7xl xl:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
          Gary Li
        </h1>
        <p className="text-3xl xl:text-4xl text-slate-700 dark:text-slate-300 font-medium">Full Stack Developer</p>
      </div>
    </div>
  );
};
export default Header;
