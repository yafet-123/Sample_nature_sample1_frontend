import React from "react";

export function Design() {
  return (
    <div>
      <div className="h-full grid grid-cols-1 md:grid-cols-2 p-20 bg-gray-300">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-slate-800 text-3xl font-normal capitalize text-left mb-5 tracking-wide w-full">
            floral <span className="text-black">Design studio</span>
          </h1>
          <p className="text-left font-serif tracking-wide leading-6 capitalize text-base mb-5 lg:pr-28 text-black">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="flex flex-col justify-between items-center">
          <p className=" text-left font-serif tracking-wide leading-6 capitalize text-base mb-5 lg:pr-28 text-black">
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
