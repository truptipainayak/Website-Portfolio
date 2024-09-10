// import Tippy from "@tippyjs/react";
// import Button from "components/Button";
import ImageLink from "components/ImageLink";
import links from "data/links";
import DesignsList from "data/designs";
// import { BiLinkExternal } from "react-icons/bi";
// import { FaGithub } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const Designs = () => (
  <div id={Section.Designs}>
    {getSectionHeading(Section.Designs)}

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {DesignsList.map((design) => (
        <div key={design.id} className="flex flex-col gap-2">
          <div className="max-h-[350px] overflow-hidden">
            <ImageLink
              alt={design.name}
              src={design.image}
              dimensions={{ width: 500, height: 250 }}
              href={design.link?.web}
            />
          </div>

          <h4 className="text-lg font-bold">{design.name}</h4>
        </div>
      ))}
    </div>
  </div>
);

export default Designs;
