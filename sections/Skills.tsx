import Image from "next/image";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

type Skill = {
  id: number;
  icon: string;
  name: string;
  technologies: string[];
};

const skills: Skill[] = [
    {
      id: 1,
      icon: "/images/skills/web.png",
      name: "Web Design & Development",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Pattern Lab", "Profiling", "Caching", "Database Optimization"],
    },
    {
      id: 2,
      icon: "/images/skills/angular.png",
      name: "Frontend JS Frameworks/libraries",
      technologies: ["AngularJS", "React", "Redux", "jQuery", "Vue.js", "Jest"],
    },
    {
      id: 3,
      icon: "/images/skills/nodejs.png",
      name: "Backend Javascript Frameworks",
      technologies: ["Node.js", "Express.js", "Mongoose", "REST APIs", "GraphQL", "PHP"],
    },
    {
      id: 4,
      icon: "/images/skills/database.png",
      name: "Database Management System",
      technologies: ["MySQL", "Postgres", "MongoDB"],
    },
    {
      id: 5,
      icon: "/images/skills/drupal.png",
      name: "Content Management System",
      technologies: ["Drupal", "WordPress", "Gatsby"],
    },
    {
      id: 6,
      icon: "/images/skills/programming.png",
      name: "Programming",
      technologies: ["JavaScript", "TypeScript", "PHP", "C", "C++"],
    },
    {
      id: 7,
      icon: "/images/skills/photography.png",
      name: "UI/UX Design and graphic design",
      technologies: ["Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "GIMP"],
    },
    {
      id: 8,
      icon: "/images/skills/git.png",
      name: "Tools",
      technologies: ["Git", "Heroku", "Docker", "Composer", "Kafka", "ArgoCD", "CI/CD", "Azure"],
    },
    {
      id: 9,
      icon: "/images/skills/archPattern.png",
      name: "Architectural Patterns",
      technologies: ["Microservices", "Serverless", "Event-Driven"],
    },
    {
      id: 10,
      icon: "/images/skills/perfopt.png",
      name: "Performance Optimization",
      technologies: ["Profiling", "Caching", "Database Optimization"],
    },
    {
      id: 11,
      icon: "/images/skills/security.png",
      name: "Security",
      technologies: ["OAuth", "OIDC (Azure SSO)", "Data Encryption"],
    }
  
];

const Skills = () => (
  <div id={Section.Skills}>
    {getSectionHeading(Section.Skills)}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100"
        >
          <div className="w-5 h-5">
            <Image src={skill.icon} width={20} height={20} alt={skill.name} className="object-contain" />
          </div>

          <div className="min-w-0 flex-1 flex flex-col">
            <strong className="truncate">{skill.name}</strong>
            <small className="truncate">({skill.technologies.join(", ")})</small>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
