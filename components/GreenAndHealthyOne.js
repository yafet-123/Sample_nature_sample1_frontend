import React from "react";

export function GreenAndHealthyOne() {
  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-2">
      <div className="GreenAndHealthy-one-background w-full h-screen"></div>
      <div className="GreenAndHealthy-two-background w-full h-full relative">
        <h1 className="text-slate-600 text-5xl font-normal capitalize text-center mb-5 tracking-wide w-full absolute bottom-0">
          Green <span className="text-black">Altelier</span>
        </h1>
        <p className="p-5 capitalize text-lg bg-slate-200 border rounded-lg text-center">
          this is your assistant
        </p>

        <p className="p-5 capitalize text-lg bg-slate-200 border rounded-lg text-center">
          in Design
        </p>
      </div>
    </div>
  );
}
