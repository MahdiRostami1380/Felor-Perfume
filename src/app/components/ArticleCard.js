"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function ArticleCard({
  image,
  title,
  description,
  link,
  className,
  style,
}) {
  const router = useRouter();
  return (
    <div
      className={twMerge(
        "flex flex-col justify-between transition-[transform] duration-500 w-full sm:w-[300px] lg:w-[375px] h-[550px] md:h-[708px]",
        className
      )}
      style={{ transform: style }}
    >
      <img
        src={image}
        alt={title}
        className=" max-h-[300px] size-full md:size-[300px] lg:size-[375px] object-cover"
      />
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
        <p className="font-thin mb-7 md:mb-16 text-[14px] md:text-base">
          {description.length > 250
            ? description.substring(0, 250) + "..."
            : description}
        </p>
        <button
          onClick={() => router.push(link)}
          className="btn hover:bg-white hover:text-black/90"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
