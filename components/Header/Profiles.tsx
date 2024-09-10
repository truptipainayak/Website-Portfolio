import Tippy from "@tippyjs/react";
import clsx from "clsx";
// import links from "data/links";
import type { IconType } from "react-icons";
import { FaDev, FaDribbble, FaFacebookF, FaGithubAlt, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

type Profile = {
  title: string;
  icon: IconType;
  link: string;
  className: string;
};

const profiles: Profile[] = [
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/trupti-pai-nayak-618b40112/",
    className: "bg-[#2867b2]",
  },
  {
    title: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/trupti_pai/",
    className: "bg-[#e1306c]",
  },
  {
    title: "GitHub",
    icon: FaGithubAlt,
    link: "https://github.com/truptipainayak",
    className: "bg-[#211f1f]",
  },
  {
    title: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/trupti.pai.3/",
    className: "bg-[#3b5998]",
  },
];

const Profiles: React.FC = () => (
  <div className="h-[22px] mt-5 flex gap-8">
    {profiles.map(({ title, link, icon: Icon, className }, index) => (
      <Tippy key={title} content={title} placement="bottom">
        <span
          className={clsx("p-1 text-sm text-white rounded-full", "animate__animated animate__fadeIn", className)}
          style={{ animationDelay: `${index * 0.5 + 0}s` }}
        >
          <a href={link} target="_blank" rel="noreferrer">
            <Icon />
            <span className="sr-only">{title}</span>
          </a>
        </span>
      </Tippy>
    ))}
  </div>
);

export default Profiles;
