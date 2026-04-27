import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
    return (
        <div className="rounded-3xl flex flex-col gap-6 bg-sky-50 dark:bg-[#1E2A35] shadow-lg ring-1 ring-slate-300/60 dark:ring-white/5 overflow-hidden">
            <div className="flex items-center gap-2 px-6 py-4 bg-white dark:bg-[#1a2535] border-b border-slate-300 dark:border-white/5">
                <span className="font-mono text-sm text-slate-400 select-none">~</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold select-none">$</span>
                <span className="font-mono text-lg text-slate-700 dark:text-slate-200 font-medium select-none">contact</span>
                <span className="font-mono text-slate-300 dark:text-slate-600 select-none">█</span>
            </div>
            <div className="flex flex-col gap-6 px-10 pb-10">
                <p className="text-xl text-slate-800 dark:text-slate-300">
                    Start a conversation on Linkedin or check out my other contributions!
                </p>
                <div className="flex flex-wrap gap-3">
                    <a href="https://www.linkedin.com/in/gary-li-dev" className="flex items-center gap-2.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 px-5 py-3 text-slate-900 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:text-sky-700 dark:hover:text-sky-300 hover:border-sky-200 dark:hover:border-sky-800 transition-all duration-200">
                        <FaLinkedin size="22px" />
                        <span className="text-lg font-medium">gary-li-dev</span>
                    </a>
                    <a href="https://github.com/garyli2" className="flex items-center gap-2.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 px-5 py-3 text-slate-900 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:text-sky-700 dark:hover:text-sky-300 hover:border-sky-200 dark:hover:border-sky-800 transition-all duration-200">
                        <FaGithub size="22px" />
                        <span className="text-lg font-medium">garyli2</span>
                    </a>
                    <a href="mailto:gary.li1@uwaterloo.ca" className="flex items-center gap-2.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 px-5 py-3 text-slate-900 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:text-sky-700 dark:hover:text-sky-300 hover:border-sky-200 dark:hover:border-sky-800 transition-all duration-200">
                        <MdEmail size="22px" />
                        <span className="text-lg font-medium">gary.li1@uwaterloo.ca</span>
                    </a>
                    <a href="https://gitlab.gnome.org/li-gary" className="flex items-center gap-2.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 px-5 py-3 text-slate-900 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:text-sky-700 dark:hover:text-sky-300 hover:border-sky-200 dark:hover:border-sky-800 transition-all duration-200">
                        <FaGitlab size="22px" />
                        <span className="text-lg font-medium">GNOME li-gary</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
