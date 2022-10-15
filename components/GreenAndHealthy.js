import React from "react";

export function GreenAndHealthy() {
  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-2">
      <div className="GreenAndHealthy-one-background w-full h-screen">
        <h1 className="text-gray-700 text-xl font-bold capitalize text-center tracking-wide leading-10 max-w-xl mx-auto pt-10">
          sample text.click to select the text box. click again or double click
          to start editing the text.
        </h1>
      </div>
      <div className="GreenAndHealthy-two-background w-full h-screen relative">
        <h1 className="text-slate-600 text-5xl font-normal capitalize text-center mb-10 tracking-wide w-full absolute bottom-16">
          Green and <span className="text-black">Heathy</span>
        </h1>
        <button className="p-5 capitalize text-lg bg-slate-200 border rounded-lg text-center absolute bottom-3 left-1/4 w-1/2">
          read more
        </button>
      </div>
    </div>
  );
}
