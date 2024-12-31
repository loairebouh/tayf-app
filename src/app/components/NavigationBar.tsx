"use client";
import React, { useState } from "react";
import logo from "../../../public/tayf-logo.png";
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="border-gray-600 text-white">
      <div className="flex items-center justify-between border-b border-gray-600 bg-primary px-6 py-3">
        <div className="hidden space-x-6 lg:block">
          <Link href={"/allProducts"} className="text-md font-semibold text-white hover:text-gray-600">
            Shop
          </Link>
          <Link href="/#about" className="text-md font-semibold text-white hover:text-gray-600">
            Our Story
          </Link>
        </div>
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={100} />
          </Link>
        </div>
        <div className="hidden lg:block">
          <button className="duration-400 transform rounded-full bg-white px-6 py-2 font-bold text-primary transition hover:-translate-y-1">
            Contacter Nous
          </button>
        </div>
        <div className="ml-auto flex items-center lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`border-b border-gray-600 bg-primary transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen ? "max-h-screen py-2" : "max-h-0 overflow-hidden"}`}>
        <a href="#" className="text-md block px-6 py-2 font-semibold text-white hover:text-gray-600">
          Boutique
        </a>
        <a href="#" className="text-md block px-6 py-2 font-semibold text-white hover:text-gray-600">
          De Nous
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;