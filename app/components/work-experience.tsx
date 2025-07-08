import {
  Timeline,
  Button,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react"

const WorkExperienceItem = ({
  time,
  company,
  description,
  pointColor
}: {
  time: string;
  company: string;
  description: string;
  pointColor: string;
}) => {
  return (
    <TimelineItem className="mb-5">
      <TimelinePoint theme={{
        marker: {
          base: {
            horizontal: 'dark:bg-white',
            vertical: `absolute -left-1.5 mt-1.5 size-3 rounded-full border border-white ${pointColor} dark:${pointColor} dark:border-white`
          }
        }
      }} />
      <TimelineContent>
        <TimelineTime className="text-black dark:text-white">{time}</TimelineTime>
        <TimelineTitle as="h2">{company}</TimelineTitle>
        <TimelineBody className='text-black dark:text-white'>{description}</TimelineBody>
      </TimelineContent>
    </TimelineItem>
  );
};

const WORK_EXPERIENCES = [
  {
    time: "May 2025 - Present",
    company: "StackAdapt",
    description: "Innovating full-time for better ad planning!",
    pointColor: 'bg-cyan-500'
  },
  {
    time: "Jan - Apr 2024 & Sept - Dec 2024",
    company: "StackAdapt",
    description: "Building full stack ad forecasting features with Ruby on Rails and React.",
    pointColor: 'bg-cyan-500'
  },
  {
    time: "Jan - Apr 2023",
    company: "D2L",
    description: "Engineered full stack RAG AI solutions on AWS with OpenSearch for embeddings storage and and ANN vector similarity searches.",
    pointColor: "bg-lime-500"
  },
  {
    time: "May - Aug 2022",
    company: "BlackBerry",
    description: "Continued development of management features focusing on scalable and distributed event streaming using Apache Kafka.",
    pointColor: 'bg-zinc-500'
  },
  {
    time: "Sept - Dec 2021",
    company: "BlackBerry",
    description: "Developed full stack management features for the Mobile Threat Defence team to manage advanced corporate device threats.",
    pointColor: 'bg-zinc-500'
  }
]

const WorkExperience = () => {
  return (
    <div className="rounded-3xl 2xl:rounded-r-none bg-sky-100 dark:bg-[#273F4F] gap-5 flex flex-col pt-10">
      <h1 className="ml-10 text-5xl font-extrabold dark:text-white">Work</h1>
      <Timeline className=" border-gray-500 dark:border-white ml-5 xl:ml-10 flex flex-col w-9/10">
        {WORK_EXPERIENCES.map(work => <WorkExperienceItem key={work.time} {...work} />)}
      </Timeline>
      <Button className="w-full rounded-3xl rounded-t-none 2xl:rounded-r-none focus:ring-0 dark:bg-[#447D9B] dark:hover:bg-[#27363d]" href="./Gary%20Li%20Resume.pdf">
        <p className="text-xl">See My Resume</p>
      </Button>
    </div>
  );
};

export default WorkExperience;
