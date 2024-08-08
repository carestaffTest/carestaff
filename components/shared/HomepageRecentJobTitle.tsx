"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomepageRecentJobTitle = () => {
  const animation1 = useAnimation();

  const { ref: ref, inView: inView1 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      animation1.start({
        opacity: 1,
        y: 0,
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
        y: 100,
      });
    }
  }, [inView1, animation1]);
  return (
    <motion.div
      ref={ref}
      animate={animation1}
      className="text-[#e27107] p-bold-24 md:h3-bold z-10"
    >
      Recommended Jobs
    </motion.div>
  );
};

export default HomepageRecentJobTitle;
