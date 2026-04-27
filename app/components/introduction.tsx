import SectionCard from "./section-card";

const Introduction = () => {
  return (
    <SectionCard command="about-me" className="bg-violet-50 dark:bg-[#1E2A35]">
      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 dark:divide-white/5">
        <div className="flex flex-col gap-2 px-10 py-7">
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-600 dark:text-slate-400">Education</span>
          <p className="text-lg text-slate-800 dark:text-white/90 leading-relaxed"><strong className="text-[#5D0096] dark:text-violet-400">Computer Engineering</strong> at the <strong className="text-[#EAAB00]">University of Waterloo</strong> with coops across the industry
          </p>
        </div>
        <div className="flex flex-col gap-2 px-10 py-7">
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-600 dark:text-slate-400">Currently</span>
          <p className="text-lg text-slate-800 dark:text-white/90 leading-relaxed">Building ad planning tools at <strong className="text-blue-600 dark:text-blue-400">StackAdapt</strong>, innovating smarter and more effective solutions every day
          </p>
        </div>
        <div className="flex flex-col gap-2 px-10 py-7">
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-600 dark:text-slate-400">Approach</span>
          <p className="text-lg text-slate-800 dark:text-white/90 leading-relaxed">I take ownership of what I build and hold it to a high bar, shipping pragmatic software that solves real problems for real people
          </p>
        </div>
      </div>
    </SectionCard>
  );
};

export default Introduction;
