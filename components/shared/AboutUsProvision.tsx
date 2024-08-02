import React from "react";

const AboutUsProvision = () => {
  return (
    <div className="flex-center flex-col gap-5 md:gap-10 wrapper">
      <div className="w-full flex items-center pl-2 md:pl-5 bg-blue-stripe-img bg-content bg-center h-[50px] border border-[#53d1d1] text-[#53d1d1] p-bold-16 md:h5-bold">
        Provision of Human Resources Services
      </div>
      <div className="flex px-2 md:px-5 flex-col gap-5 md:gap-8 p-regular-12 md:p-regular-16">
        <p className="">
          In addition to the "Care Staff Service," a service specializing in
          workers at nursing care facilities, we have developed the "Hiro Nurse
          Support," a human resources service specializing in hospital clinics.
          Taking advantage of our strengths as a specialist in the medical and
          nursing care industries, we provide one-stop services for recruitment,
          temporary staffing, and human resource development. We provide optimal
          employment support for each job seeker.
        </p>
      </div>
    </div>
  );
};

export default AboutUsProvision;
