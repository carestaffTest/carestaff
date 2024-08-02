"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FaqOneAnswer = ({ answer }: any) => {
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
    <div ref={ref} className="w-full flex">
      <motion.p
        animate={animation1}
        className="w-full flex  p-regular-12 md:p-regular-14"
      >
        {answer}
      </motion.p>
    </div>
  );
};

export default FaqOneAnswer;
