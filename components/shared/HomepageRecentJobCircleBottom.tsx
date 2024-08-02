"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomepageRecentJobCircleBottom = () => {
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
          duration: 2,
          type: "spring",
          bounce: 0.3,
          delay: 1,
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
    <motion.div
      ref={ref}
      animate={animation1}
      className="absolute rounded-full bg-[#b9d6ea] w-[310px] h-[310px] bottom-[-80px] right-[-70px]"
    >
      <div className="rounded-full bg-[#b9d6ea] w-[310px] h-[310px] "></div>
    </motion.div>
  );
};

export default HomepageRecentJobCircleBottom;
