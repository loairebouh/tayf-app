import React from "react";
import { qatarBold, qatarMeduim } from "../Fonts";

const customTitle = (title: string, subTitle: string) => {
  return (
    <div className="mt-10 flex flex-col items-center gap-1">
      <p className={`${qatarMeduim.className} text-gray-900`}>{subTitle}</p>
      <h1
        className={`${qatarBold.className} text-center text-4xl text-primary lg:text-5xl`}
      >
        {title}
      </h1>
    </div>
  );
};

export default customTitle;
