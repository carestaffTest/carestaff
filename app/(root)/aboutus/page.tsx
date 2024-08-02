import AboutUsCompanyProfile from "@/components/shared/AboutUsCompanyProfile";
import AboutUsEstablishment from "@/components/shared/AboutUsEstablishment";
import AboutUsListOfOffices from "@/components/shared/AboutUsListOfOffices";
import AboutUsPresidentGreeting from "@/components/shared/AboutUsPresidentGreeting";
import AboutUsProfilePicture from "@/components/shared/AboutUsProfilePicture";
import AboutUsProvision from "@/components/shared/AboutUsProvision";
import AboutUsSupport from "@/components/shared/AboutUsSupport";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="w-full flex-center flex-col gap-5">
        <section className="flex-center w-full">
          <AboutUsProfilePicture />
        </section>
        <section
          id="companyprofile"
          className="flex-center w-full scroll-mt-40 md:scroll-mt-60"
        >
          <AboutUsCompanyProfile />
        </section>
        <section
          id="listofoffices"
          className="flex-center w-full scroll-mt-40 md:scroll-mt-60"
        >
          <AboutUsListOfOffices />
        </section>
        <section
          id="presidentgreeting"
          className="flex w-full  scroll-mt-40 md:scroll-mt-60"
        >
          <AboutUsPresidentGreeting />
        </section>
        <section
          id="provisionofhumanresources"
          className="flex w-full scroll-mt-40 md:scroll-mt-60"
        >
          <AboutUsProvision />
        </section>
        <section
          id="establishmentofqualificationcourses"
          className="flex w-full scroll-mt-40 md:scroll-mt-60"
        >
          <AboutUsEstablishment />
        </section>
        <section
          id="supportforreemployment"
          className="flex mb-5 md:mb-10 scroll-mt-40 md:scroll-mt-60"
        >
          <AboutUsSupport />
        </section>
      </div>
    </>
  );
};

export default AboutUs;
