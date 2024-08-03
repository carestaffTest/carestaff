"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUsProfilePicture = () => {
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const { ref: ref, inView: inView1 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      animation1.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.1,
          delay: 0.1,
        },
      });
      animation2.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.1,
          delay: 0.3,
        },
      });
    } else {
      animation1.start({
        opacity: 0,
        y: 100,
      });
      animation2.start({
        opacity: -100,
        y: 100,
      });
    }
  }, [inView1, animation1, animation2]);
  return (
    <div ref={ref} className="w-full flex-center flex-col gap-5 md:gap-10">
      <motion.div
        animate={animation1}
        className="w-full flex-center bg-orange-stripe-img bg-contain bg-center h-[50px] md:h-[80px] text-white p-bold-20 md:h3-bold"
      >
        About Us
      </motion.div>
      <motion.div
        animate={animation2}
        className="flex-center max-w-[300px] md:max-w-[600px] "
      >
        <Image
          src="/assets/images/company-owner.png"
          width={600}
          height={480}
          alt="Profile Picture"
          className="flex rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default AboutUsProfilePicture;
