import Head from "next/head";
import Image from "next/image";
import { Design } from "../components/Design";
import { Gallery } from "../components/Gallery";
import { GreenAndHealthy } from "../components/GreenAndHealthy";
import { GreenAndHealthyOne } from "../components/GreenAndHealthyOne";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { GreenAndHealthyTwo } from "../components/GreenAndHealthyTwo";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <GreenAndHealthy />
      <Gallery />
      <Design />
      <GreenAndHealthyOne />
      <GreenAndHealthyTwo />
      <Footer />
    </div>
  );
}
