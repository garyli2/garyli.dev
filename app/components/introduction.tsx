const Introduction = () => {
  return (
    <div className="flex flex-col gap-6 dark:bg-[#181C14] p-10 pt-0 rounded-3xl">
      <h1 className="font-bold text-5xl dark:text-white">Hi there!</h1>
      <p className="text-xl md:text-3xl dark:text-white">
        I am a <strong className="text-[#5D0096]">Computer Engineering</strong> graduate from the <strong className="text-[#EAAB00]">University of Waterloo</strong> and a <strong>GNOME Foundation</strong> member.
      </p>
      <p className="text-xl md:text-3xl dark:text-white">
        I work across languages & frameworks to build practical software that perform well.
      </p>
    </div>
  );
};

export default Introduction;
