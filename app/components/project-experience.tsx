import {
    Button,
    Card,
} from "flowbite-react"
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
    return <Card theme={{
        root: {
            children: 'flex h-full flex-col justify-between gap-2'
        }
    }}>
        <h2 className="2xl:normal-skew text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
        </h2>
        <p className="2xl:normal-skew p-1 font-normal text-gray-700 dark:text-gray-300">
            {description}
        </p>
        <div className="mb-3 flex gap-3">
            {icons}
        </div>
        <div className="flex gap-2">
            <Button className="grow bg-orange-400 hover:bg-orange-500 cursor-pointer">
                <a href={githubUrl} target="_blank">
                    Github
                </a>
            </Button>
            {previewUrl && <Button className="grow bg-primary-600 hover:bg-primary-700 cursor-pointer">
                <a href={previewUrl} target="_blank">
                    Site
                </a>
            </Button>}
        </div>
    </Card>
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
        <div className="flex flex-col gap-5 rounded-3xl 2xl:rounded-l-none bg-orange-100 dark:bg-[#3C3D37] p-10">
            <h1 className="text-end text-5xl font-extrabold dark:text-white">Projects</h1>
            <div className="grow grid w-full grid-cols-2 content-center gap-3 md:grid-cols-3">
                {projects}
            </div>
        </div>
    );
};

export default ProjectExperience;
