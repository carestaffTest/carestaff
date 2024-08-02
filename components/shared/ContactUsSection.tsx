import React from "react";
import ContactUsEmail from "./ContactUsEmail";
import ContactUsForRecruiters from "./ContactUsForRecruiters";
import ContactUsPhotoAndParagraph from "./ContactUsPhotoAndParagraph";

const ContactUsSection = () => {
  return (
    <div className="w-full wrapper flex-center flex-col gap-5 md:gap-10 mb-5 md:mb-10">
      <div className="flex-center flex-col max-w-[300px] md:max-w-[600px] gap-5 md:gap-10">
        <ContactUsPhotoAndParagraph />

        <div className="w-full">
          <ContactUsEmail />
        </div>
      </div>

      <div className="w-full flex">
        <ContactUsForRecruiters />
      </div>
    </div>
  );
};

export default ContactUsSection;
