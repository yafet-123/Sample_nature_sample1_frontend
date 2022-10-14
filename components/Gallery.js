import React from "react";

export function Gallery() {
  return (
    <div className="h-screen w-full grid grid-cols-2 md:grid-cols-3 gap-5 p-5 lg:p-20">
      <div className="gallery-one-background w-full h-full"></div>
      <div className="gallery-two-background w-full h-full"></div>
      <div className="gallery-three-background w-full h-full"></div>
      <div className="gallery-four-background w-full h-full"></div>
      <div className="gallery-five-background w-full h-full"></div>
      <div className="gallery-six-background w-full h-full"></div>
    </div>
  );
}
