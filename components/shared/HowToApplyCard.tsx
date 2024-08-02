import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HowToApplyCard = ({ howToApplyStep, duration }: any) => {
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
          duration: Number(duration * 0.1) + 0.1,
          delay: Number(duration * 0.1) + 0.5,
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
    <motion.div
      ref={ref}
      animate={animation1}
      className="flex items-center border border-slate-300 flex-col gap-2 w-[290px] p-5 shadow-lg shadow-slate-700 bg-white rounded-2xl"
    >
      <div className="flex-center w-[80px] h-[80px] mb-2 bg-step-border-img bg-contain">
        <div className="flex-center text-[#e27107] h5-bold">
          {howToApplyStep.htanumber}
        </div>
      </div>
      <div className="flex text-center text-[#e27107] p-bold-16">
        {howToApplyStep.content}
      </div>
    </motion.div>
  );
};

export default HowToApplyCard;
