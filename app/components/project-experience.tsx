import { ReactElement, useMemo } from "react";
import { FaReact, FaLinux } from "react-icons/fa";
import { SiTypescript, SiC, SiGraphql, SiPython, SiKubernetes } from "react-icons/si";

const Project = ({
    name,
    description,
    icons,
    githubUrl,
    previewUrl
}: {
    name: string;
    description: string;
    icons: ReactElement[];
    githubUrl: string;
    previewUrl?: string;
}) => {
    return (
        <div className="flex h-full flex-col justify-between gap-3 rounded-2xl bg-white/80 dark:bg-black/20 border border-slate-200 dark:border-white/5 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col gap-1.5 grow">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {name}
                </h2>
                <p className="text-sm text-slate-800 dark:text-slate-300">
                    {description}
                </p>
            </div>
            <div className="flex gap-3 py-1">
                {icons}
            </div>
            <div className="flex gap-2">
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grow text-center rounded-xl bg-slate-700 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 text-white text-sm font-semibold py-2 transition-colors duration-200"
                >
                    Github
                </a>
                {previewUrl && (
                    <a
                        href={previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grow text-center rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold py-2 transition-colors duration-200"
                    >
                        Site
                    </a>
                )}
            </div>
        </div>
    );
}

const ICON_SIZE = "32px";
const PROJECTS = [
    {
        name: 'RadioMap.ca',
        description: 'Global 2D heat map of radio stations',
        githubUrl: 'https://github.com/garyli2/RadioMap',
        previewUrl: 'https://radiomap.ca',
        icons: [
            <FaReact key="react" size='32px' className="dark:text-white" />,
            <SiTypescript key="typescript" size={ICON_SIZE} className="dark:text-white" />
        ]
    },
    {
        name: 'SixWheels',
        description: 'Bike share mapper supporting the GBFS shared mobility standard',
        githubUrl: 'https://github.com/garyli2/SixWheels',
        icons: [
            <SiTypescript key="typescript" size={ICON_SIZE} className="dark:text-white" />,
            <FaLinux key="linux" size={ICON_SIZE} className="dark:text-white" />
        ]
    },
    {
        name: 'InfoGrep',
        description: 'Scalable and open RAG framework for enterprise',
        githubUrl: 'https://github.com/SE-Exort',
        icons: [
            <SiPython key="python" size={ICON_SIZE} className="dark:text-white" />,
            <SiTypescript key="typescript" size={ICON_SIZE} className="dark:text-white" />,
            <SiKubernetes key="kubernetes" size={ICON_SIZE} className="dark:text-white" />
        ]
    },
    {
        name: 'USBMouse',
        description: 'Linux USB Mouse Driver Kernel Module',
        githubUrl: 'https://github.com/garyli2/USBMouse',
        icons: [
            <SiC key="c" size={ICON_SIZE} className="dark:text-white" />,
            <FaLinux key="linux" size={ICON_SIZE} className="dark:text-white" />
        ]
    },
    {
        name: 'TorontoGQL',
        description: 'GraphQL API for a data-driven Toronto',
        githubUrl: 'https://github.com/garyli2/TorontoGQL',
        icons: [
            <SiGraphql key="graphql" size={ICON_SIZE} className="dark:text-white" />,
            <SiTypescript key="typescript" size={ICON_SIZE} className="dark:text-white" />
        ]
    },
    {
        name: 'imgary.li',
        description: 'Responsive and minimal personal site',
        githubUrl: 'https://github.com/garyli2/garyli.dev',
        icons: [
            <FaReact key="react" size={ICON_SIZE} className="dark:text-white" />,
            <SiTypescript key="typescript" size={ICON_SIZE} className="dark:text-white" />
        ]
    }

];

const ProjectExperience = () => {
    const projects = useMemo(() => PROJECTS.map(proj => <Project key={proj.name} {...proj} />), []);

    return (
        <div className="flex flex-col gap-5 rounded-3xl 2xl:rounded-l-none bg-orange-50 dark:bg-[#1E2A35] overflow-hidden shadow-lg ring-1 ring-slate-300/60 dark:ring-white/5">
            <div className="flex items-center gap-2 px-6 py-4 bg-white dark:bg-[#1a2535] border-b border-slate-300 dark:border-white/5">
                <span className="font-mono text-sm text-slate-400 select-none">~</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold select-none">$</span>
                <span className="font-mono text-lg text-slate-700 dark:text-slate-200 font-medium select-none">projects</span>
                <span className="font-mono text-slate-300 dark:text-slate-600 select-none">█</span>
            </div>
            <div className="flex-1 flex flex-col justify-center p-10">
                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                    {projects}
                </div>
            </div>
        </div>
    );
};

export default ProjectExperience;
