"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { YouTubeEmbed } from "@next/third-parties/google";

const HomepageVideo = () => {
  const animation1 = useAnimation();

  const { ref: ref, inView: inView1 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      animation1.start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 1,
        },
      });
    } else {
      animation1.start({
        opacity: 0,
      });
    }
  }, [inView1, animation1]);
  return (
    <motion.div
      ref={ref}
      animate={animation1}
      className="w-full flex items-center justify-center mt-5 mb-10"
    >
      <YouTubeEmbed videoid="LCWN1OQVOHA" width={700} params="controls=1" />
    </motion.div>
  );
};

export default HomepageVideo;
