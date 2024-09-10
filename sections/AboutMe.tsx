import Image from "next/image";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";
import Button from "components/Button";
import links from "data/links";

const AboutMe = () => (
  <div id={Section.AboutMe}>
    {getSectionHeading(Section.AboutMe)}
    <div className="grid md:grid-cols-4 gap-12">
  <div className="relative col-span-1 md:hidden mb-6">
    <div className="aspect-square relative">
      <Image
        alt="Selfie"
        src="/images/about-me/selfie.png"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  </div>

  <div className="relative col-span-1 hidden md:block">
    <div className="aspect-square relative">
      <Image
        alt="Selfie"
        src="/images/about-me/selfie.png"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  </div>
      <div className="col-span-3 max-w-full prose prose-sm md:prose-base prose-neutral dark:prose-invert">
        <p>Hey there!</p>

<p>
I’m Trupti Nayak—a full-stack JavaScript developer, designer, and photographer. This website is a reflection of my journey, showcasing my diverse skills and passions.
</p><p>
I ventured into design driven by a keen eye for aesthetics. I’m a self-proclaimed perfectionist, always striving to ensure that everything I create not only functions well but also looks exceptional. My goal is to craft products that are as beautiful as they are functional.
</p><p>

My fascination with technology led me to development. The digital experiences we often take for granted—like seemed like magic to me, igniting my curiosity and fueling my quest to innovate.
</p><p>
This website is designed to give you a glimpse into my work and make it easy for us to connect. If my work resonates with you, I’d love to hear from you! Feel free to drop me an email at truptipai95@gmail.com.
</p><p>
For a more streamlined view of my information, you can download a PDF version of my portfolio here:
        </p>

        
        <div>
          <Button onClick={() => openURLInNewTab(links.resume)}>Download Resume</Button>
        </div>
      </div>
      
    </div>
  </div>
);

export default AboutMe;
