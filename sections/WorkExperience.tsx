import Tippy from "@tippyjs/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const DISPLAY_COUNT = 3;

type WorkExperience = {
  id: number;
  logo: string;
  name: string;
  period: { start: string; end: string };
  position: string;
  location: string;
  summary: string;
  keyFocus: string[];
};

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    logo: "/images/work-experience/redspace.png",
    name: "REDSpace Inc.",
    period: { start: "Jan 21", end: "Present" },
    position: "Senior Software Developer",
    location: "Halifax, NS, Canada",
    summary: "Led the development of a high-profile video streaming platform. Oversaw the team's development, integration with legacy TV models, and managed a team of 5 developers in a Technical Lead capacity. Coordinated with clients as an SME to resolve device issues, gather requirements, and oversee the release of multiple devices. Created foundational setups for integration with ServiceNow and SharePoint, including containerization, deployment automation, and Kubernetes configuration for a high profile military project. Team Lead on the 2021 March Madness Live web application, built in Vue.js with Vuex and GraphQL.",
    keyFocus: ["React", "Tailwind CSS", "GraphQL (Hasura)", "Building Reusable Design Components"],
  },
  {
    id: 2,
    logo: "/images/work-experience/aptitude.png",
    name: "Aptitude Digital",
    period: { start: "May 19", end: "Dec 20" },
    position: "Web Developer",
    location: "Halifax, NS, Canada",
    summary:
      "Spearheaded the development of mobile-first custom Drupal theming for various clients, ensuring high performance and cross-browser compatibility. Managed backend development tasks, including custom module creation in PHP and complex JavaScript functionalities. Led a team in creating and optimizing custom Drupal themes, contributing to project planning, code reviews, and technical guidance. Successfully implemented advanced caching strategies and performance optimizations, resulting in faster load times and improved user experience. Architected and executed backend solutions and API integrations. Used object oriented programming concepts and dependency injection. ",
    keyFocus: ["React", "Cypress (Automation Testing)", "Scala", "Process Management", "In-Depth Documentation"],
  },
  {
    id: 3,
    logo: "/images/work-experience/betsol.png",
    name: "Betsol Software (India) Pvt. Ltd.",
    period: { start: "Jan 17", end: "Dec 18" },
    position: "Software Engineer",
    location: "Bengaluru, India",
    summary:
      "Developed and integrated REST APIs for web applications, focusing on high-performance backend services and effective data management. Played a key role in designing scalable API architectures and ensuring seamless integration with front-end components. Coordinated with cross-functional teams to address client requirements and enhance software functionality. Championed the Agile development process, leading sprint planning sessions, and facilitating daily stand-ups. Enhanced team productivity and project outcomes through effective leadership and coordination.      ",
    keyFocus: [
      "React/React Native",
      "NestJS",
      "GSAP Animation Library",
      "Agile Sprint Planning",
      "Incident Management",
    ],
  },
];

type Props = {
  data: WorkExperience;
  isFirst: boolean;
  isLast: boolean;
};

const WorkExperience: React.FC<Props> = ({ data, isFirst, isLast }) => (
  <div className="flex group">
    <div className={clsx("ml-1 w-1 flex-shrink-0 bg-neutral-500/25", { "rounded-t": isFirst, "rounded-b": isLast })} />

    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-teal-500/80 dark:bg-white/80 group-hover:w-6 transition-[width]" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div className="relative w-[100px] h-30">
        <Image src={data.logo} alt={data.name} width={100} height={40} className="object-contain" />
      </div>

      <div>
        <h3>
          <span className="text-base font-bold">{data.name}</span>{" "}
          <span className="text-xs">
            ({data.period.start} - {data.period.end})
          </span>
        </h3>
        <h4>{data.position}</h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{data.location}</span>
      </h5>

      <p className="prose prose-sm prose-neutral dark:prose-invert">{data.summary}</p>

   
    </div>
  </div>
);

const WorkExperienceTimeline = () => {
  const [showMore, setShowMore] = useState(workExperiences.length > DISPLAY_COUNT ? false : true);

  return (
    <div id={Section.WorkExperience}>
      {getSectionHeading(Section.WorkExperience)}

      <div className="flex flex-col">
        {workExperiences
          .filter((_, index) => (showMore ? true : index < DISPLAY_COUNT))
          .map((data, index) => (
            <WorkExperience key={data.id} data={data} isFirst={index === 0} isLast={index === 2} />
          ))}
      </div>

      {!showMore && (
        <Tippy content={`Show ${workExperiences.length - DISPLAY_COUNT} More`} placement="right">
          <div className="inline-block ml-8 p-2 cursor-pointer" onClick={() => setShowMore(true)}>
            <MdMoreHoriz size="24" />
          </div>
        </Tippy>
      )}
    </div>
  );
};

export default WorkExperienceTimeline;
