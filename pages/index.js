import Head from "next/head";
import Image from "next/image";
import { Gallery } from "../components/Gallery";
import { GreenAndHealthy } from "../components/GreenAndHealthy";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <GreenAndHealthy />
      <Gallery />
    </div>
  );
}
