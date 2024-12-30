import Image from "next/image";
import React from "react";
import HeroImage from "../../../public/hero-image.webp";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={HeroImage} 
        alt="Hero Image"
        layout="fill" 
        objectFit="cover"
        className="absolute top-0 left-0 z-0"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
        <h1 className="text-5xl font-bold">Welcome to Tayf</h1>
        <p className="mt-4">A touch of nature to your beauty</p>
        <button className="mt-6 bg-black text-white py-2 px-6 rounded-lg">Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
