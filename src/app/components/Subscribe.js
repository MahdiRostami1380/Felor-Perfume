"use client";

import Link from "next/link";
import { Socials } from "../data";

export default function Subscribe() {
  return (
    <div className="flex flex-col gap-6 max-w-[310px]">
      <h2 className="bg-clip-android-chrome font-DaniloCatalina text-4xl bg-[linear-gradient(to_bottom,#AB572D,#A5470F,#EC9A52,#AB5829)] inline text-transparent bg-clip-text">
        Felor
      </h2>
      <h3 className="text-xl md:text-2xl">Subscribe to Our Newsletter:</h3>
      <p className="font-thin max-w-[260px]">
        Receive Updats on New Arrivals and Special Promotions!
      </p>
      <form
        action={() => {
          alert("subscribed");
        }}
        className="rounded-xl overflow-hidden w-full flex"
      >
        <input
          className="py-2 px-4 bg-[#1d1d1d] w-4/5 outline-none placeholder:text-[#3f3f3f]"
          type="text"
          placeholder="Your email here"
        />
        <button
          type="submit"
          className="bg-[#AB572D] py-2 px-4 grow-[1] hover:text-[#AB572D] hover:bg-transparent transition"
        >
          Submit
        </button>
      </form>
      <div className="flex gap-2 justify-between md:justify-start">
        {Socials.map((item, index) => (
          <Link href={item.link} key={index}>
            <img src={`./Images/Socials/${item.title}.svg`} alt={item.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
