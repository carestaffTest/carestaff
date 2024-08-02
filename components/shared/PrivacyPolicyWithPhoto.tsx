import Image from "next/image";
import React from "react";

const PrivacyPolicyWithPhoto = () => {
  return (
    <div className="w-full flex-center flex-col gap-5 md:gap-10">
      <div className="w-full flex-center bg-orange-stripe-img bg-contain bg-center h-[50px] md:h-[80px] text-white p-bold-20 md:h3-bold">
        Privacy Policy
      </div>
      <div className="flex-center max-w-[300px] md:max-w-[600px] ">
        <Image
          src="/assets/images/privacy-policy.png"
          width={600}
          height={480}
          alt="Profile Picture"
          className="flex rounded-2xl"
        />
      </div>
      <div className="wrapper flex-center">
        <p className="p-regular-12 md:p-regular-16 w-full md:w-[880px] px-2 md:px-5">
          Hiro Career Staff Co., Ltd. (hereinafter referred to as "the Company")
          recognizes that the protection of personal information is an important
          responsibility, and has established a personal information management
          system based on our corporate philosophy and the following policy, and
          manages it appropriately.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyWithPhoto;
