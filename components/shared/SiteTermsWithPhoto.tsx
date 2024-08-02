import Image from "next/image";
import React from "react";

const SiteTermsWithPhoto = () => {
  return (
    <div className="w-full flex-center flex-col gap-5 md:gap-10">
      <div className="w-full flex-center bg-orange-stripe-img bg-contain bg-center h-[50px] md:h-[80px] text-white p-bold-20 md:h3-bold">
        Site Terms of Use
      </div>
      <div className="flex-center max-w-[300px] md:max-w-[600px] ">
        <Image
          src="/assets/images/site-of-terms-photo.png"
          width={600}
          height={480}
          alt="Profile Picture"
          className="flex rounded-2xl"
        />
      </div>
    </div>
  );
};

export default SiteTermsWithPhoto;
