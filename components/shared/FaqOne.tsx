import { faqsOne } from "@/constant";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FaqOneQuestion from "./FaqOneQuestion";
import FaqOneAnswer from "./FaqOneAnswer";

const FaqOne = () => {
  const animation2 = useAnimation();

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView2) {
      animation2.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          type: "spring",
          bounce: 0.3,
          delay: 1,
        },
      });
    } else {
      animation2.start({
        opacity: 0,
        x: -50,
      });
    }
  }, [inView2, animation2]);
  return (
    <div ref={ref2} className="w-full flex flex-col gap-2 md:gap-5">
      <div className="flex text-[#e27107] h3-medium">1. Use of the Website</div>

      {faqsOne.map((faq1: any) => {
        return (
          <div className="w-full flex flex-col  gap-2 md:gap-5" key={faq1.key}>
            <FaqOneQuestion question={faq1.question} bg="#30b588" />
            <FaqOneAnswer answer={faq1.answer} />
          </div>
        );
      })}
    </div>
  );
};

export default FaqOne;
