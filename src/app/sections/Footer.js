import Link from "next/link";
import Subscribe from "../components/Subscribe";
import { SiteMap } from "../data";

export default function Footer() {
  return (
    <footer className="bg-[#141414]">
      <div className="section-container flex justify-between items-center gap-14 lg:gap-28 2xl:gap-56 flex-col lg:flex-row">
        <Subscribe />
        <div className="flex justify-between items-center gap-14 grow-[1] w-full lg:w-auto flex-col md:flex-row">
          {SiteMap.map((category, index) => (
            <div
              key={index}
              className="w-[150px]  md:w-auto max-w-[150px] flex flex-col gap-3"
            >
              <h2 className="font-semibold">{category.subject}</h2>
              {category.sub.map((item) => (
                <Link href={item.link} key={item.title} className="font-thin">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container py-10 lg:py-16 border-t border-[#333333] mx-auto text-center font-thin">
        &#169; 2023 Felor Inc. All rights reserved
      </div>
    </footer>
  );
}
