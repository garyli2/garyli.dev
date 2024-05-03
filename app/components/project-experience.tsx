import {
    Button,
    Card,
} from "flowbite-react"
import { ReactElement } from "react";
import { FaReact, FaJava, FaAndroid, FaLinux } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiC, SiGraphql } from "react-icons/si";

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

    return <Card className="max-w-80" theme={{
        root: {
            children: 'flex h-full flex-col justify-between gap-2 p-7'
        }
    }}>
        <h5 className="normal-skew text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
        </h5>
        <p className="normal-skew p-1 font-normal text-gray-700 dark:text-gray-400">
            {description}
        </p>
        <div className="flex flex-row gap-3">
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
            <SiTypescript key="typescript" size="32px" />,
            <SiJavascript key="javascript" size="32px" />,
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
        name: 'SemesterShare',
        description: 'Track timetables and courses with friends',
        button: <Button href='https://semestershare.com' target="_blank">
            Site
        </Button>,
        icons: [
            <SiJavascript key="javascript" size="32px" />
        ]
    },
    {
        name: 'EquationSpace',
        description: 'Real-time collaborative graphing calculator',
        button: <Button href='https://equationspace.com' target="_blank">
            Site
        </Button>,
        icons: [
            <SiJavascript key="javascript" size="32px" />
        ]
    },
    {
        name: 'Steps4News',
        description: 'Track steps while listening to headlines',
        button: <Button href='https://github.com/garyli2/Steps4News' target="_blank">
            Site
        </Button>,
        icons: [
            <FaJava key="java" size="32px" />,
            <FaAndroid key="android" size="32px" />
        ]
    }

]

const ProjectExperience = () => {
    return (
        <div className="slanted-left -ml-24 mr-20 mt-10 flex w-1/2 flex-col items-end rounded-r-3xl bg-orange-100 p-10">
            <h1 className="text-right text-5xl font-extrabold">What I&apos;ve worked on</h1>
            <div className="slanted-left-right mr-8 mt-16 grid w-[90%] grid-cols-3 gap-5">
                {PROJECTS.map(proj => <Project key={proj.name} {...proj} />)}
            </div>
        </div>
    );
};

export default ProjectExperience;
