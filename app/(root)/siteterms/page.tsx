import SiteTermsArticles from "@/components/shared/SiteTermsArticles";
import SiteTermsWithPhoto from "@/components/shared/SiteTermsWithPhoto";
import React from "react";

const SiteTerms = () => {
  return (
    <div className="w-full flex flex-col gap-5 md:gap-10">
      <div className="w-full flex-center">
        <SiteTermsWithPhoto />
      </div>
      <div className="w-full flex-center">
        <SiteTermsArticles />
      </div>
      <div className="w-full flex-center"></div>
    </div>
  );
};

export default SiteTerms;
