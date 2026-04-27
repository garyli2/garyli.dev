const Introduction = () => {
  return (
    <div className="flex flex-col bg-violet-50 dark:bg-[#1E2A35] rounded-3xl shadow-lg ring-1 ring-slate-300/60 dark:ring-white/5 overflow-hidden">
      <div className="flex items-center gap-2 px-6 py-4 bg-white dark:bg-[#1a2535] border-b border-slate-300 dark:border-white/5">
        <span className="font-mono text-sm text-slate-400 select-none">~</span>
        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold select-none">$</span>
        <span className="font-mono text-lg text-slate-700 dark:text-slate-200 font-medium select-none">about-me</span>
        <span className="font-mono text-slate-300 dark:text-slate-600 select-none">█</span>
      </div>
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
    </div>
  );
};

export default Introduction;
