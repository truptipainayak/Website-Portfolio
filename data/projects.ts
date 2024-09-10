import type { Project } from "types/Sections";

const projectsList: Project[] = [
  {
    id: 1,
    image: "/images/projects/leto-landing.jpg",
    name: "Leto-2.0",
    summary: "Web application automating the entire software delivery practice by bridging the automation gaps between existing processes and tools without having to replace the infrastructure.",
    tags: ["React JS", "Node", "Express", "MongoDB", "NPM", "Docker"],
    link: {
      web: "https://drive.google.com/drive/u/1/folders/1e-Iv0An7Uz8MQWlv0zaDfyDdIOWBQ-rW",
    },
  },
  {
    id: 2,
    image: "/images/projects/mls-main.png",
    name: "Maritime Launch Services",
    summary: "Website developed for Canada's First commercial spaceport. Drupal 8 site that uses parallax scrolling and animations to enhance visual experience.",
    tags: ["JavaScript", "PHP", "Sass", "Drupal", "Composer"],
    link: {
      web: "https://www.maritimelaunch.com/",
    },
  },
  {
    id: 3,
    image: "/images/projects/halifax-main.png",
    name: "Halifax.ca",
    summary: "Website providing Information about the Halifax Regional Municipality.",
    tags: ["JavaScript", "NPM", "Drupal", "Docker", "Pattern Lab"],
    link: {
      web: "https://www.halifax.ca/",
    },
  },
  {
    id: 4,
    image: "/images/projects/k-em.png",
    name: "Kaiser Estimation Model Tool",
    summary: "An estimation model tool for Kaiser Permanente, which focuses on estimating and predicting the overall cost to implement projects through adaptive learning and achieving 95% accuracy with the actual data.",
    tags: ["AngularJS", "JavaScript", "SASS", "JIRA", "Rest API"],
    link: {
      web: "https://drive.google.com/drive/u/1/folders/16ukGQ5KQcPOl-9xZ2byOR9gOWgVXKAAj",
    },
  },
  // {
  //   id: 5,
  //   image: "/images/projects/hr-tool.jpg",
  //   name: "Application Tracking System (HR Tool)",
  //   summary: "Web application designed to manage HR administration which helped in recruitment as well as in maintaining employee information, benefits, payroll.",
  //   tags: ["Angular 2", "SASS"],
  // }
]

export default projectsList;
