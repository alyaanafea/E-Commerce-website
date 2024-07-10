import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px] m-0 flex items-center justify-center   bg-hero bg-no-repeat bg-cover bg-center w-full">
      <div className="flex items-center justify-around w-full ">
        <div className="flex flex-col gap-8 ">
          <div className="flex items-center justify-start gap-3">
            <div className="bg-red-400 w-[30px] h-[2px]"></div> <p className="text-xs font-semibold">NEW <br /> TREND</p>
          </div>
          <div>
            <h1 className="text-[3.5rem]  leading-[4rem]">
              AUTUMN <br /> SALE STYLISH <br /> <span className="font-bold">WOMENS</span>
            </h1>
          </div>
          <Link to={"/"} className="underline ">DISCOVER MORE</Link>
        </div>
        <div className="hidden md:block lg:block">
          <img src="src\assets\images\woman_hero.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
