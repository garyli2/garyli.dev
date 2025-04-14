import {
    Button,
    Card,
} from "flowbite-react"
import { ReactElement } from "react";
import { FaReact, FaJava, FaAndroid, FaLinux } from "react-icons/fa";
import { SiTypescript, SiC, SiGraphql, SiPython, SiKubernetes } from "react-icons/si";

const Project = ({
    name,
    description,
    icons,
    button
}: {
    name: string;
    description: string;
    icons: ReactElement[];
    button: ReactElement;
}) => {

    return <Card className="m-2 mx-auto max-w-64 md:max-w-72" theme={{
        root: {
            children: 'flex h-full flex-col justify-between gap-2 p-2 md:p-4'
        }
    }}>
        <h2 className="2xl:normal-skew text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
        </h2>
        <p className="2xl:normal-skew p-1 font-normal text-gray-700 dark:text-gray-400">
            {description}
        </p>
        <div className="mb-3 flex flex-row gap-3">
            {icons}
        </div>

        {button}

    </Card>
}

const PROJECTS = [
    {
        name: 'RadioMap.ca',
        description: 'Global 2D heat map of radio stations',
        button: <div className="flex gap-2">
            <Button href='https://github.com/garyli2/RadioMap' target="_blank" className="grow">
                Github
            </Button>
            <Button href='https://radiomap.ca' target="_blank" className="grow">
                Site
            </Button>
        </div>,
        icons: [
            <FaReact key="react" size='32px' />,
            <SiTypescript key="typescript" size="32px" />
        ]
    },
    {
        name: 'SixWheels',
        description: 'Bike share mapper supporting the GBFS shared mobility standard',
        button: <Button href='https://github.com/garyli2/SixWheels' target="_blank">
            Github
        </Button>,
        icons: [
            <SiTypescript key="typescript" size="32px" />,
            <FaLinux key="linux" size="32px" />
        ]
    },
    {
        name: 'InfoGrep',
        description: 'Scalable and open RAG framework for enterprise',
        button: <Button href='https://github.com/SE-Exort' target="_blank">
            Github
        </Button>,
        icons: [
            <SiPython key="python" size="32px" />,
            <SiTypescript key="typescript" size="32px" />,
            <SiKubernetes key="kubernetes" size="32px" />
        ]
    },
    {
        name: 'USBMouse',
        description: 'Linux USB Mouse Driver Kernel Module',
        button: <Button href='https://github.com/garyli2/USBMouse' target="_blank">
            Github
        </Button>,
        icons: [
            <SiC key="c" size="32px" />,
            <FaLinux key="linux" size="32px" />
        ]
    },
    {
        name: 'TorontoGQL',
        description: 'GraphQL API for a data-driven Toronto',
        button: <Button href='https://github.com/garyli2/TorontoGQL' target="_blank">
            Github
        </Button>,
        icons: [
            <SiGraphql key="graphql" size="32px" />,
            <SiTypescript key="typescript" size="32px" />
        ]
    },
    {
        name: 'Steps4News',
        description: 'Track steps while listening to headlines',
        button: <Button href='https://github.com/garyli2/Steps4News' target="_blank">
            Github
        </Button>,
        icons: [
            <FaJava key="java" size="32px" />,
            <FaAndroid key="android" size="32px" />
        ]
    }

]

const ProjectExperience = () => {
    return (
        <div className="2xl:slanted-left z-10 flex h-full flex-col items-end gap-5 rounded-3xl bg-orange-100 pb-5 pt-10 lg:absolute lg:right-0 lg:w-7/12 lg:rounded-l-none">
            <h1 className="pr-10 text-right text-2xl font-extrabold md:text-5xl">What I&apos;ve worked on</h1>
            <div className="2xl:slanted-left-right grid w-full grid-cols-1 content-center gap-5 md:grid-cols-2 lg:px-10 2xl:mr-10 2xl:mt-20 2xl:w-11/12 2xl:grid-cols-3 2xl:pl-16">
                {PROJECTS.map(proj => <Project key={proj.name} {...proj} />)}
            </div>
        </div>
    );
};

export default ProjectExperience;
