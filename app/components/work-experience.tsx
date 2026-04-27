import {
  Timeline,
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
    description: "Shipping high-impact features that power ad planning at scale.",
    pointColor: 'bg-cyan-500'
  },
  {
    time: "Jan - Apr 2024 & Sept - Dec 2024",
    company: "StackAdapt",
    description: "Drove measurable performance wins and delivered full stack forecasting features across two internship terms.",
    pointColor: 'bg-cyan-500'
  },
  {
    time: "Jan - Apr 2023",
    company: "D2L",
    description: "Engineered AI-powered semantic search to transform how course contents are discovered.",
    pointColor: "bg-lime-500"
  },
  {
    time: "Sept - Dec 2021 & May - Aug 2022",
    company: "BlackBerry",
    description: "Full stack threat management tooling with real-time data stream processing.",
    pointColor: 'bg-zinc-500'
  }
]

const WorkExperience = () => {
  return (
    <div className="rounded-3xl 2xl:rounded-r-none bg-sky-50 dark:bg-[#1E2A35] gap-5 flex flex-col overflow-hidden shadow-lg ring-1 ring-slate-300/60 dark:ring-white/5">
      <div className="flex items-center gap-2 px-6 py-4 bg-white dark:bg-[#1a2535] border-b border-slate-300 dark:border-white/5">
        <span className="font-mono text-sm text-slate-400 select-none">~</span>
        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold select-none">$</span>
        <span className="font-mono text-lg text-slate-700 dark:text-slate-200 font-medium select-none">work-experience</span>
        <span className="font-mono text-slate-300 dark:text-slate-600 select-none">█</span>
      </div>
      <Timeline className=" border-sky-300 dark:border-sky-800/60 ml-5 xl:ml-10 mt-5 flex flex-col w-9/10">
        {WORK_EXPERIENCES.map(work => <WorkExperienceItem key={work.time} {...work} />)}
      </Timeline>
      <a
        className="w-full rounded-3xl rounded-t-none 2xl:rounded-r-none bg-sky-600 hover:bg-sky-700 dark:bg-[#447D9B] dark:hover:bg-[#27363d] flex items-center justify-center py-2.5 text-white font-semibold tracking-wide transition-colors duration-200"
        href="./Gary%20Li%20Resume.pdf"
      >
        <p className="text-xl">See My Resume</p>
      </a>
    </div>
  );
};

export default WorkExperience;
