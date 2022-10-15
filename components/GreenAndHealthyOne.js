import React from "react";

export function GreenAndHealthyOne() {
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2">
      <div className="GreenAndHealthy-three-background w-full h-screen"></div>
      <div className="GreenAndHealthy-four-background w-full h-screen relative">
        <h1 className="text-slate-600 text-5xl font-normal capitalize text-center mb-5 tracking-wide w-full">
          Green <span className="text-black">Altelier</span>
        </h1>
        <p className="p-5 capitalize text-3xl text-center font-normal tracking-wide">
          this is your assistant
        </p>

        <p className="capitalize text-4xl font-normal text-center absolute bottom-10 w-full">
          in Design
        </p>
      </div>
    </div>
  );
}
