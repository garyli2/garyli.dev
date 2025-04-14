import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
    return (
        <div className="my-10 rounded-3xl bg-amber-100 p-10">
            <h1 className="text-2xl font-extrabold md:text-5xl">Contact me</h1>
            <p className="mt-5 text-2xl">
                Start a conversation on Linkedin with me or check out my other contributions!
            </p>
            <div className="mt-7 flex flex-wrap gap-16">
                <a href="https://www.linkedin.com/in/gary-li-dev" className="flex items-center gap-2">
                    <FaLinkedin size="40px" />
                    <p className="underline-skip-ink text-xl underline md:text-2xl">gary-li-dev</p>
                </a>

                <a href="https://github.com/garyli2" className="flex items-center gap-2">
                    <FaGithub size="40px" />
                    <p className="underline-skip-ink text-xl underline md:text-2xl">garyli2</p>
                </a>

                <a href="mailto:gary.li1@uwaterloo.ca" className="flex items-center gap-2">
                    <MdEmail size="40px" />
                    <p className="underline-skip-ink text-xl underline md:text-2xl">gary.li1@uwaterloo.ca</p>
                </a>

                <a href="https://gitlab.gnome.org/li-gary" className="flex items-center gap-2">
                    <FaGitlab size="40px" />
                    <p className="text-xl md:text-2xl">GNOME</p>
                    <p className="underline-skip-ink text-xl underline md:text-2xl">li-gary</p>
                </a>
            </div>

        </div >
    );
};

export default ContactMe;
