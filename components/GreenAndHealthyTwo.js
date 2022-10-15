import React from "react";

export function GreenAndHealthyTwo() {
  return (
    <div className="GreenAndHealthy-five-background w-full h-[30rem] pt-56 px-20">
      <h1 className="text-white text-5xl font-normal uppercase text-left tracking-wide w-full mb-5">
        subscribe
      </h1>
      <input
        type="text"
        placeholder="Enter your valid email address"
        className="p-5 border border-white bg-transparent placeholder:text-white placeholder:capitalize"
      />
      <button className="ml-5 py-5 px-10 bg-white border rounded-lg uppercase">
        submit
      </button>
    </div>
  );
}
