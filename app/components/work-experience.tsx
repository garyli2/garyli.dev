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
    <TimelineItem>
      <TimelinePoint theme={{
        marker: {
          base: {
            vertical: `absolute -left-1.5 mt-1.5 size-3 rounded-full border border-white ${pointColor}`
          }
        }
      }} />
      <TimelineContent>
        <TimelineTime className="text-black">{time}</TimelineTime>
        <TimelineTitle as="h2">{company}</TimelineTitle>
        <TimelineBody className='text-black'>{description}</TimelineBody>
      </TimelineContent>
    </TimelineItem>
  );
};

const WORK_EXPERIENCES = [
  {
    time: "Jan - Apr 2024",
    company: "StackAdapt",
    description: "Building forecasting for better ad planning!",
    pointColor: 'bg-cyan-500'
  },
  {
    time: "Jan - Apr 2023",
    company: "D2L",
    description: "Explored novel and emerging AI applications and engineered internal full stack projects hosted on AWS. Leveraged OpenSearch to store text embeddings and perform ANN vector searches for semantic text similarity.",
    pointColor: "bg-lime-500"
  },
  {
    time: "May - Aug 2022",
    company: "BlackBerry",
    description: "Continued full stack work for the Mobile Threat Defence team on threat detection features. Developed React TypeScript UI for the management console and built corresponding CRUD APIs with Java Spring Boot and Hibernate.",
    pointColor: 'bg-zinc-500'
  },
  {
    time: "Sept - Dec 2021",
    company: "BlackBerry",
    description: "Built full stack console management features for BlackBerry's Mobile Threat Defence team to detect and manage advanced corporate device threats.",
    pointColor: 'bg-zinc-500'
  }
]

const WorkExperience = () => {
  return (
    <div className="left-0 w-full justify-between rounded-3xl bg-sky-100 pt-10">
      <div className="flex flex-col gap-5 lg:w-5/12">
        <h1 className="mx-10 text-3xl font-extrabold md:text-5xl">Where I&apos;ve worked</h1>
        <Timeline className="mx-10 w-3/4 border-gray-500">
          {WORK_EXPERIENCES.map(work => <WorkExperienceItem key={work.time} {...work} />)}
        </Timeline>
      </div>
      <div className="mt-5 flex justify-center lg:w-6/12">
        <a href="./Gary%20Li%20Resume.pdf" download className="w-full rounded-3xl rounded-t-none">
          <Button gradientMonochrome="info" className="w-full rounded-b-3xl rounded-t-none">
            <p className="text-xl">See My Resume</p>
          </Button>
        </a>
      </div >


    </div >
  );
};

export default WorkExperience;
