import { forRecruiters } from "@/constant";
import Image from "next/image";
import React from "react";
import ContactUsForRecruitersCard from "./ContactUsForRecruitersCard";

const ContactUsForRecruiters = () => {
  return (
    <div className="w-full flex flex-col gap-5 md:gap-10">
      <div className="w-full h-[88px] flex flex-center relative">
        <div className="flex bg-right-dog-img bg-contain bg-right h-[88px] w-[36px] absolute right-0 z-10"></div>
        <div className="flex relative w-full h-[88px] ">
          <Image
            src="/assets/images/right_dog.avif"
            height={28}
            width={38}
            alt="dog"
            className="flex absolute z-10 right-0 top-0"
          />
          <div className="bg-orange-stripe-img bg-contain w-[calc(100%-37px)] h-[88px] flex-center text-white rounded-lg z-20">
            <p className="p-bold-24 md:h3-bold ">FOR RECRUITERS</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex-center flex-col w-full">
          <ul className="grid w-full px-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-7 lg:flex-row lg:justify-center">
            {forRecruiters.map((forRecruiter: any) => {
              return (
                <li
                  key={forRecruiter.key}
                  className="flex justify-center md:justify-none"
                >
                  <ContactUsForRecruitersCard forRecruiter={forRecruiter} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForRecruiters;
