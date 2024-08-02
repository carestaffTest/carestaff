"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUsForRecruitersCard = ({ forRecruiter }: any) => {
  const animation1 = useAnimation();

  const { ref: ref, inView: inView1 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      animation1.start({
        opacity: 1,
        scale: 1,
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
        scale: 0.3,
      });
    }
  }, [inView1, animation1]);
  return (
    <motion.div
      ref={ref}
      animate={animation1}
      className="flex items-center border border-slate-300 flex-col gap-2 w-[290px] p-5 shadow-lg shadow-slate-700 bg-white rounded-2xl"
    >
      <div className="flex-center w-[80px] h-[80px] mb-2 bg-step-border-img bg-contain">
        <div className="flex-center text-[#e27107] h5-bold">
          {forRecruiter.htanumber}
        </div>
      </div>
      <div className="flex text-center text-[#e27107] p-bold-16">
        {forRecruiter.content}
      </div>
    </motion.div>
  );
};

export default ContactUsForRecruitersCard;
