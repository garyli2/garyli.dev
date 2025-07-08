import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
    return (
        <div className="rounded-3xl p-10 flex flex-col gap-5 dark:bg-[#181C14]">
            <h1 className="text-5xl font-extrabold dark:text-white">Contact me</h1>
            <p className="text-2xl dark:text-white">
                Start a conversation on Linkedin or check out my other contributions!
            </p>
            <div className="flex flex-wrap gap-6 2xl:gap-16">
                <a href="https://www.linkedin.com/in/gary-li-dev" className="flex items-center gap-2">
                    <FaLinkedin size="40px" className="dark:text-white" />
                    <p className="underline-skip-ink text-xl underline md:text-2xl dark:text-white">gary-li-dev</p>
                </a>

                <a href="https://github.com/garyli2" className="flex items-center gap-2">
                    <FaGithub size="40px" className="dark:text-white" />
                    <p className="underline-skip-ink text-xl underline md:text-2xl dark:text-white">garyli2</p>
                </a>

                <a href="mailto:gary.li1@uwaterloo.ca" className="flex items-center gap-2">
                    <MdEmail size="40px" className="dark:text-white" />
                    <p className="underline-skip-ink text-xl underline md:text-2xl dark:text-white">gary.li1@uwaterloo.ca</p>
                </a>

                <a href="https://gitlab.gnome.org/li-gary" className="flex items-center gap-2">
                    <FaGitlab size="40px" className="dark:text-white" />
                    <p className="underline-skip-ink text-xl underline md:text-2xl dark:text-white">GNOME li-gary</p>
                </a>
            </div>

        </div >
    );
};

export default ContactMe;
