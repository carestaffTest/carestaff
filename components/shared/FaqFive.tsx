import { faqsFive } from "@/constant";
import React from "react";
import FaqOneQuestion from "./FaqOneQuestion";
import FaqOneAnswer from "./FaqOneAnswer";

const FaqFive = () => {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-5">
      <div className="flex text-[#e27107] h3-medium">
        5. People who are leaving or looking for a job
      </div>

      {faqsFive.map((faq5: any) => {
        return (
          <div className="w-full flex flex-col gap-2 md:gap-5" key={faq5.key}>
            <FaqOneQuestion question={faq5.question} bg="#92C017" />
            <FaqOneAnswer answer={faq5.answer} />
          </div>
        );
      })}
    </div>
  );
};

export default FaqFive;
