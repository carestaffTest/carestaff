import React from "react";

const AboutUsEstablishment = () => {
  return (
    <div className="flex-center flex-col gap-5 md:gap-10 wrapper">
      <div className="w-full flex items-center pl-2 md:pl-5 bg-blue-stripe-img bg-content bg-center h-[50px] border border-[#53d1d1] text-[#53d1d1] p-bold-16 md:h5-bold">
        Establishment of Qualification
      </div>
      <div className="flex px-2 md:px-5 flex-col gap-5 md:gap-8 p-regular-12 md:p-regular-16">
        <p className="">
          With the aim of fostering new nursing care personnel, we have launched
          an introductory course for nursing care that has been transferred from
          Home Helper Level 2 to "Nursing Care Staff Beginner Training". In
          addition to home-visit nursing care at private homes, it is a
          qualification that can be used as a caregiver at a residential
          facility, as a volunteer, or as a caregiver for family members.
          Courses sponsored by our company are held at any time in various parts
          of Iwate Prefecture, mainly in Morioka City, Iwate Prefecture.
        </p>
      </div>
    </div>
  );
};

export default AboutUsEstablishment;
