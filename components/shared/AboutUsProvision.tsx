"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUsProvision = () => {
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
          Provision of Human Resources Services
        </motion.div>
      </div>
      <div
        ref={ref2}
        className="flex px-2 md:px-5 flex-col gap-5 md:gap-8 p-regular-12 md:p-regular-16"
      >
        <motion.p animate={animation2} className="">
          In addition to the "Care Staff Service," a service specializing in
          workers at nursing care facilities, we have developed the "Hiro Nurse
          Support," a human resources service specializing in hospital clinics.
          Taking advantage of our strengths as a specialist in the medical and
          nursing care industries, we provide one-stop services for recruitment,
          temporary staffing, and human resource development. We provide optimal
          employment support for each job seeker.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUsProvision;
