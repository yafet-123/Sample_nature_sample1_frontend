import React from "react";

export function Navbar() {
  return (
    <div className="flex justify-between items-center px-20 h-16 absolute top-0 z-20 w-full">
      <h1 className="font-serif font-bold text-4xl text-slate-400 ">logo</h1>
      <div className="flex items-center font-mono font-medium uppercase text-lg text-white">
        <h1 className="mx-5">Home</h1>
        <h1 className="mx-5">Page</h1>
      </div>
    </div>
  );
}
