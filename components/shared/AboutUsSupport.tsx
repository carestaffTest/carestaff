import React from "react";

const AboutUsSupport = () => {
  return (
    <div className="flex-center flex-col gap-5 md:gap-10 wrapper">
      <div className="w-full flex items-center pl-2 md:pl-5 bg-blue-stripe-img bg-content bg-center h-[50px] border border-[#53d1d1] text-[#53d1d1] p-bold-16 md:h5-bold">
        Support for Re-employment
      </div>
      <div className="flex px-2 md:px-5 flex-col gap-5 md:gap-8 ">
        <p className="p-regular-12 md:p-regular-16">
          We have been working with local governments to secure human resources
          and create jobs in the local area, such as employment and employment
          support projects for job seekers affected by the disaster, and
          monitoring support projects by medical and nursing care workers in
          coastal areas of Iwate Prefecture. Going forward, we will continue to
          actively promote support for the re-employment of seniors and support
          for the return to work of medical and nursing professionals.
        </p>
      </div>
    </div>
  );
};

export default AboutUsSupport;
