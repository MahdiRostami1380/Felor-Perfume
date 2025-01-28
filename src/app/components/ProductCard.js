import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function ProductCard({
  image,
  name,
  price,
  volume,
  className,
  id,
  link,
  style,
}) {
  return (
    <Link
      className={twMerge(
        "group cursor-pointer w-full md:w-[260px] h-[442px] rounded-md bg-LinearGradientProductCard transition-[transform] duration-500 py-5 px-2 flex items-center justify-between flex-col overflow-hidden",
        className
      )}
      href={link ?? "/"}
      style={{ transform: style }}
    >
      <img
        src={image ?? "./Images/p2.png"}
        alt="perfume"
        className="group-hover:scale-150 h-[350px] duration-500"
      />
      <div className="group-hover:translate-y-[100px] duration-500 ease-out">
        <h3 className="text-center font-medium text-[18px]">{name}</h3>
        <div>
          <span className="text-[#AB572D] font-medium">$ {price}</span>
          <span className="font-thin ml-5">{volume}ml</span>
        </div>
      </div>
    </Link>
  );
}
