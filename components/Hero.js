import React from "react";

export function Hero() {
  return (
    <div className="w-full h-full">
      <div className="hero-background w-full h-[40rem] relative">
        <div className="bg-transparent w-full lg:w-[35rem] h-96 p-10 absolute top-0 right-0 bottom-0 left-0 m-auto border-2 border-white flex flex-col justify-center">
          <h1 className="text-slate-300 text-lg text-center font-medium uppercase mb-5 tracking-wide ">
            green is the prime color of the world
          </h1>

          <h1 className="text-white text-5xl text-center font-serif tracking-wide leading-[5rem] capitalize mb-5 w-full">
            nature is pleased with simplicity
          </h1>
        </div>
      </div>

      <div className="h-full grid grid-cols-1 md:grid-cols-2 p-20 bg-slate-300">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-white text-9xl font-bold capitalize text-left mb-5 tracking-wide w-full lg:w-2/4">
            01
          </h1>
          <h1 className="text-slate-800 text-3xl font-normal capitalize text-left mb-5 tracking-wide w-full lg:w-2/4">
            Awesomes <span className="text-black">Pages</span>
          </h1>
          <p className="lg:w-2/4 text-left font-serif tracking-wide leading-6 capitalize text-base mb-5 lg:pr-28 text-black">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="flex flex-col justify-between items-center">
          <h1 className="text-white text-9xl font-bold capitalize text-left mb-5 tracking-wide w-full lg:w-2/4">
            02
          </h1>
          <h1 className="text-slate-800 text-3xl font-normal capitalize text-left mb-5 tracking-wide w-full lg:w-2/4">
            Fresh and <span className="text-black">creative</span>
          </h1>
          <p className="lg:w-2/4 text-left font-serif tracking-wide leading-6 capitalize text-base mb-5 lg:pr-28 text-black">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
