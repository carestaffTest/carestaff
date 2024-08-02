import PrivacyPolicyPersonalInformationProtectionPolicy from "@/components/shared/PrivacyPolicyPersonalInformationProtectionPolicy";
import PrivacyPolicyWithPhoto from "@/components/shared/PrivacyPolicyWithPhoto";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full flex flex-col gap-5 md:gap-10">
      <div className="w-full flex-center">
        <PrivacyPolicyWithPhoto />
      </div>
      <div className="w-full flex-center">
        <PrivacyPolicyPersonalInformationProtectionPolicy />
      </div>
      <div className="w-full flex-center"></div>
    </div>
  );
};

export default PrivacyPolicy;
