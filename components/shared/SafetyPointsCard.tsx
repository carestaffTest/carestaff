"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SafetyPointsCard = ({ safetyPoint, delay }: any) => {
  
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
          duration: Number(delay * 0.1) + 0.1,
          delay: Number(delay * 0.1) + 0.5,
        },
      });
    } else {
      animation1.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [inView1, animation1]);
  return (
    <div ref={ref} className="flex justify-center w-full">
    <motion.div animate={animation1} className="flex items-center border border-slate-300 flex-col gap-5 w-[290px] p-5 shadow-lg shadow-slate-700 bg-white rounded-2xl">
      <div className="flex-center w-[80px] h-[80px]">
        <Image
          src={safetyPoint.imgUrl}
          width={500}
          height={500}
          alt={safetyPoint.title}
        />
      </div>
      <div className="flex text-[#e27107] p-semibold-14 text-center">
        {safetyPoint.title}
      </div>
      <div className="flex text-[#888888] p-regular-12">
        {safetyPoint.content}
      </div>
    </motion.div>
    </div>
  );
};

export default SafetyPointsCard;
