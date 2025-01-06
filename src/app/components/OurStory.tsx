import React from "react";
import customTitle from "./ui/customTitle";
import desertPic from "../../../public/desert.webp";
import deliveryPic from "../../../public/delivery.jpeg";
import Image from "next/image";
import { qatarBold, qatarThin } from "./Fonts";

const OurStory = () => {
  return (
    <div className="mt-10">
      <div>
        <div>{customTitle("Our Story", "know more about us")}</div>
        <div className="mx-10 grid gap-8 py-10 lg:grid-cols-3">
          <div className={`relative col-span-2 overflow-hidden rounded-lg p-5`}>
            <div className="absolute inset-0 z-0 rounded-2xl bg-primary opacity-40"></div>
            <Image
              src={desertPic}
              alt="Desert Landscape"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              className="-z-10 rounded-2xl"
            />
            <div className="relative z-10 flex flex-col items-center gap-6 py-10 text-white">
              <h1 className={`lg:text-4xl ${qatarBold.className}`}>
                From the Algerian Desert
              </h1>
              <p className={`${qatarThin.className}`}>
                Proudly 100% Algerian, our products are crafted with care,
                inspired by the purity and richness of the Sahara Desert.
                Combining local resources with traditional expertise, we deliver
                exceptional quality rooted in Algeria&apos;s heritage and
                innovation.
              </p>
            </div>
          </div>
          <div className={`relative col-span-1 overflow-hidden rounded-lg p-5`}>
            <div className="absolute inset-0 z-0 rounded-2xl bg-primary opacity-40"></div>
            <Image
              src={deliveryPic}
              alt="Delivery Pic"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              className="-z-10 rounded-2xl"
            ></Image>
            <div className="relative z-10 flex flex-col items-center gap-6 py-10 text-white">
              <h1 className={`lg:text-4xl ${qatarBold.className}`}>
                Fast Delivery
              </h1>
              <p className={`${qatarThin.className} text-sm`}>
                Experience the convenience of our fast delivery service,
                ensuring your products arrive quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`mx-10 flex flex-col items-center gap-8 rounded-2xl bg-primary py-10 text-white lg:grid-cols-3`}
        >
          <div className={`text-4xl`}>Discover your true beauty</div>
          <div className={`px-4 text-center text-lg text-gray-100`}>
            Unlock the secrets to radiant skin and indulge in the luxurious feel
            of our natural cosmetics. Our products are carefully crafted to
            enhance your beauty and confidence. Treat yourself to the best,
            because you deserve it.
          </div>
          <button className="rounded-md bg-white px-8 py-2 text-2xl font-semibold text-primary hover:bg-black/[0.8] hover:shadow-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
