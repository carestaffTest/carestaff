import ContactUsSection from "@/components/shared/ContactUsSection";
import ContactUsTitle from "@/components/shared/ContactUsTitle";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="w-full flex">
        <section className="w-full flex flex-col gap-5 md:gap-10">
          <ContactUsTitle />
          <div className="w-full flex-center">
            <ContactUsSection />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
