import { faqsFour } from "@/constant";
import React from "react";
import FaqOneQuestion from "./FaqOneQuestion";
import FaqOneAnswer from "./FaqOneAnswer";

const FaqFour = () => {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-5">
      <div className="flex text-[#e27107] h3-medium">
        4. Those who have started temporary employment
      </div>

      {faqsFour.map((faq4: any) => {
        return (
          <div className="w-full flex flex-col  gap-2 md:gap-5" key={faq4.key}>
            <FaqOneQuestion question={faq4.question} bg="#49CAE6" />
            <FaqOneAnswer answer={faq4.answer} />
          </div>
        );
      })}
    </div>
  );
};

export default FaqFour;
