import Image from "next/image";
import React from "react";
import HeroImage from "../../../public/hero-img.webp";
import { FaCartShopping } from "react-icons/fa6";


const HeroSection = () => {
  return (
    <section className="relative w-full h-[75vh] md:h-[85vh]">
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="object-cover object-center"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-primary/30 z-10"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
        <h1 className="text-6xl font-bold leading-tight font-serif">
          Discover Your True Beauty
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium font-sans">
          100% Natural products that care for your skin and hair safely and effectively.
        </p>
        <button className="mt-6 border border-white text-white py-2 px-6 rounded-full hover:bg-primary transition duration-300 flex flex-row items-center gap-2 font-light text-2xl "> 
          Shop Now
          <span><FaCartShopping /></span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
