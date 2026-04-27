import { ReactNode } from "react";

const SectionCard = ({
    command,
    className = "",
    children,
}: {
    command: string;
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div className={`flex flex-col rounded-3xl shadow-lg ring-1 ring-slate-300/60 dark:ring-white/5 overflow-hidden ${className}`}>
            <div className="flex items-center gap-2 px-6 py-4 bg-white dark:bg-[#1a2535] border-b border-slate-300 dark:border-white/5">
                <span className="font-mono text-sm text-slate-400 select-none">~</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold select-none">$</span>
                <span className="font-mono text-lg text-slate-700 dark:text-slate-200 font-medium select-none">{command}</span>
                <span className="font-mono text-slate-300 dark:text-slate-600 select-none">█</span>
            </div>
            {children}
        </div>
    );
};

export default SectionCard;
