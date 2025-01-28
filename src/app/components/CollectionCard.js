import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function CollectionCard({ title, link, image, className }) {
  return (
    <Link
      href={link}
      className={twMerge(
        "relative h-[300px] lg:h-[460px] hover:outline hover:outline-4 hover:outline-offset-4 hover:outline-[#AB572D]",
        className
      )}
    >
      <img
        src={image}
        alt="title"
        className={`h-[300px] lg:h-[460px] w-full object-cover`}
      />
      <div
        className={`h-[300px] lg:h-[460px] w-full absolute top-0 left-0 bg-[linear-gradient(to_top,#111,transparent)]`}
      ></div>
      <div className="absolute bottom-7 left-5 text-xl lg:text-2xl">
        {title}
      </div>
    </Link>
  );
}
