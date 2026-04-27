import { ReactNode } from "react";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SectionCard from "./section-card";

const ContactPill = ({ href, icon, label }: { href: string; icon: ReactNode; label: string }) => (
    <a href={href} className="flex items-center gap-2.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 px-5 py-3 text-slate-900 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:text-sky-700 dark:hover:text-sky-300 hover:border-sky-200 dark:hover:border-sky-800 transition-all duration-200">
        {icon}
        <span className="text-lg font-medium">{label}</span>
    </a>
);

const ContactMe = () => {
    return (
        <SectionCard command="contact" className="bg-sky-50 dark:bg-[#1E2A35] gap-6">
            <div className="flex flex-col gap-6 px-10 pb-10">
                <p className="text-xl text-slate-800 dark:text-slate-300">
                    Start a conversation on Linkedin or check out my other contributions!
                </p>
                <div className="flex flex-wrap gap-3">
                    <ContactPill href="https://www.linkedin.com/in/gary-li-dev" icon={<FaLinkedin size="22px" />} label="gary-li-dev" />
                    <ContactPill href="https://github.com/garyli2" icon={<FaGithub size="22px" />} label="garyli2" />
                    <ContactPill href="mailto:gary.li1@uwaterloo.ca" icon={<MdEmail size="22px" />} label="gary.li1@uwaterloo.ca" />
                    <ContactPill href="https://gitlab.gnome.org/li-gary" icon={<FaGitlab size="22px" />} label="GNOME li-gary" />
                </div>
            </div>
        </SectionCard>
    );
};

export default ContactMe;
