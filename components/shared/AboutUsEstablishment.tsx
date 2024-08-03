"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUsEstablishment = () => {
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
          duration: 0.1,
          delay: 0.1,
        },
      });
    } else {
      animation1.start({
        opacity: 0,
        x: -100,
      });
    }
  }, [inView1, animation1]);

  const animation2 = useAnimation();

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView2) {
      animation2.start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.1,
        },
      });
    } else {
      animation2.start({
        opacity: 0,
      });
    }
  }, [inView2, animation2]);
  return (
    <div className="flex-center flex-col gap-5 md:gap-10 wrapper">
      <div ref={ref} className="w-full">
        <motion.div
          animate={animation1}
          className="w-full flex items-center pl-2 md:pl-5 bg-blue-stripe-img bg-content bg-center h-[50px] border border-[#53d1d1] text-[#53d1d1] p-bold-16 md:h5-bold"
        >
          Establishment of Qualification
        </motion.div>
      </div>
      <div
        ref={ref2}
        className="flex px-2 md:px-5 flex-col gap-5 md:gap-8 p-regular-12 md:p-regular-16"
      >
        <motion.p animate={animation2} className="">
          With the aim of fostering new nursing care personnel, we have launched
          an introductory course for nursing care that has been transferred from
          Home Helper Level 2 to "Nursing Care Staff Beginner Training". In
          addition to home-visit nursing care at private homes, it is a
          qualification that can be used as a caregiver at a residential
          facility, as a volunteer, or as a caregiver for family members.
          Courses sponsored by our company are held at any time in various parts
          of Iwate Prefecture, mainly in Morioka City, Iwate Prefecture.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUsEstablishment;
