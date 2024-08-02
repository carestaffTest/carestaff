"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SafetyPointsCollection from "./SafetyPointsCollection";

const HomepageSafetyPoints = () => {
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
          duration: 0.1,
          delay: 0.1,
        },
      });
    } else {
      animation1.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [inView1, animation1]);
  return (<>
      <div className="flex w-full flex-col gap-5">
        <div  ref={ref} className="flex w-full">
        <motion.div
          animate={animation1}
          className="w-full h-[88px] flex flex-center relative"
        >
          <div className="flex pl-[36px] bg-orange-stripe-img bg-contain w-[calc(100%-34px)] h-[88px] z-20 absolute right-0 rounded-xl"></div>
          <div className="flex bg-left-dog-img bg-contain bg-left h-[88px] w-[36px] absolute left-0 z-10"></div>
          <div className="flex-center text-center text-white p-bold-16 md:h3-bold z-30 pl-[36px]">
            CARE STAFF SERVICES SAFETY POINTS
          </div>
        </motion.div>
        </div>

        <div className="w-full flex">
          <SafetyPointsCollection />
        </div>
        
        </div>
        </>
  );
};

export default HomepageSafetyPoints;
