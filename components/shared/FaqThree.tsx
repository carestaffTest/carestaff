import { faqsThree } from "@/constant";
import React from "react";
import FaqOneQuestion from "./FaqOneQuestion";
import FaqOneAnswer from "./FaqOneAnswer";

const FaqThree = () => {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-5">
      <div className="flex text-[#e27107] h3-medium">
        3. Employee benefits, social insurance, etc.
      </div>

      {faqsThree.map((faq3: any) => {
        return (
          <div className="w-full flex flex-col  gap-2 md:gap-5" key={faq3.key}>
            <FaqOneQuestion question={faq3.question} bg="#93A9D5" />
            <FaqOneAnswer answer={faq3.answer} />
          </div>
        );
      })}
    </div>
  );
};

export default FaqThree;
