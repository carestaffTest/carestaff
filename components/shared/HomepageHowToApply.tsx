"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HowToApplyCollection from "./HowToApplyCollection";

const HomepageHowToApply = () => {
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  const { ref: ref, inView: inView1 } = useInView({
    threshold: 0.5,
  });
  const { ref: ref2, inView: inView2 } = useInView({
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
        y: 100,
      });
    }
  }, [inView1, animation1]);

  useEffect(() => {
    if (inView2) {
      animation2.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      });
    } else {
      animation2.start({
        opacity: 0,
      });
    }
  }, [inView2, animation2]);
  return (
    <>
      <div ref={ref} className="flex flex-col w-full my-10 gap-5 md:gap-10">
        <motion.div
          animate={animation1}
          className="flex relative w-full h-[88px] "
        >
          <Image
            src="/assets/images/right_dog.avif"
            height={28}
            width={38}
            alt="dog"
            className="flex absolute z-10 right-0 top-0"
          />
          <div
            ref={ref2}
            className="w-[calc(100%-37px)] h-[88px] flex-center bg-[#5dc9c5] text-white rounded-lg z-30"
          >
            <motion.p animate={animation2} className="h3-bold">
              How to apply?
            </motion.p>
          </div>
        </motion.div>
        <div className="flex-center mb-5 md:mb-10">
          <HowToApplyCollection />
        </div>
      </div>
    </>
  );
};

export default HomepageHowToApply;
