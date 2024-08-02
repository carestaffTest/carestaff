"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FaqOneQuestion = ({ question, bg }: any) => {
  const animation1 = useAnimation();

  const { ref: ref, inView: inView1 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      animation1.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          type: "spring",
          bounce: 0.3,
          delay: 0.5,
        },
      });
    } else {
      animation1.start({
        opacity: 0,
        x: -100,
      });
    }
  }, [inView1, animation1]);
  return (
    <>
      <motion.div
        ref={ref}
        animate={animation1}
        className="w-full flex rounded-md h-[70px] md:h-[50px] overflow-hidden"
      >
        <div className='w-[50px] md:w-[150px]'
          style={{background: `${bg}`}}
        ></div>
        <div className="w-full flex bg-faq-photo-img bg-contain  items-center">
          <p className="w-full flex px-2 md:px-5 p-medium-12 md:p-medium-14 lg:p-medium-16">
            {question}
          </p>
        </div>
      </motion.div>{" "}
    </>
  );
};

export default FaqOneQuestion;
