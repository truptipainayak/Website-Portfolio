import { css } from "@emotion/css";
import clsx from "clsx";
import Image from "next/image";

const photos: string[] = [
  "/images/circle.png",
];

type Props = {
  size?: number;
};

const PhotoWall: React.FC<Props> = ({ size = 512 }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12" style={{ width: size, height: size }}>
      {photos.map((photo, index) => (
        <div
          key={photo}
          style={{ animationDelay: `${index * 0.1 + 0}s` }}
          className={clsx(
            "relative col-span-1 transition-[width]",
            "animate__animated animate__fadeInDown",
            css`
              width: ${size}px;
              height: ${size}px;
            `,
          )}
        >
          <div className="relative col-span-1">
          <div className="aspect-square relative">
          <Image
            fill
            priority
            src={photo}
            alt="Trupti Nayak"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={clsx("object-cover", { "rounded-l": index === 0, "rounded-r": index === photos.length - 1 })}
          />
        </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoWall;
