"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUsPresidentGreeting = () => {
  const animation1 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      animation1.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.2,
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

  const animation3 = useAnimation();

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView3) {
      animation3.start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.1,
        },
      });
    } else {
      animation3.start({
        opacity: 0,
      });
    }
  }, [inView3, animation3]);

  const animation4 = useAnimation();

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView4) {
      animation4.start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.1,
        },
      });
    } else {
      animation4.start({
        opacity: 0,
      });
    }
  }, [inView4, animation4]);

  const animation5 = useAnimation();

  const { ref: ref5, inView: inView5 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView5) {
      animation5.start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.1,
        },
      });
    } else {
      animation5.start({
        opacity: 0,
      });
    }
  }, [inView5, animation5]);

  const animation6 = useAnimation();

  const { ref: ref6, inView: inView6 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView6) {
      animation6.start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.1,
        },
      });
    } else {
      animation6.start({
        opacity: 0,
      });
    }
  }, [inView6, animation6]);

  const animation7 = useAnimation();

  const { ref: ref7, inView: inView7 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView7) {
      animation7.start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.1,
        },
      });
    } else {
      animation7.start({
        opacity: 0,
      });
    }
  }, [inView7, animation7]);

  const animation8 = useAnimation();

  const { ref: ref8, inView: inView8 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView8) {
      animation8.start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.1,
        },
      });
    } else {
      animation8.start({
        opacity: 0,
      });
    }
  }, [inView8, animation8]);

  const animation9 = useAnimation();

  const { ref: ref9, inView: inView9 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView9) {
      animation9.start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.1,
        },
      });
    } else {
      animation9.start({
        opacity: 0,
      });
    }
  }, [inView9, animation9]);
  return (
    <div className="flex-center flex-col gap-5 md:gap-10 wrapper">
      <div ref={ref1} className="w-full">
        <motion.div
          animate={animation1}
          className="w-full flex items-center pl-2 md:pl-5 bg-blue-stripe-img bg-content bg-center h-[50px] border border-[#53d1d1] text-[#53d1d1] p-bold-16 md:h5-bold"
        >
          President’s Greeting
        </motion.div>
      </div>
      <div className="flex px-2 md:px-5 flex-col gap-5 md:gap-8 p-regular-12 md:p-regular-16">
        <div ref={ref2} className="">
          <motion.p animate={animation2} className="">
            "We cultivate individuals who can feel happiness by working in the
            medical and caregiving field.”
          </motion.p>
        </div>

        <div ref={ref3} className="">
          <motion.p animate={animation3} className="">
            Hiro Career Staff Co., Ltd. was established in 1996 and began its
            specialized professional services in the medical and caregiving
            fields in 2006. As of 2022, we have celebrated our 16th year.
            Initially, our operations were limited to the three Tohoku
            prefectures including Iwate, but in response to societal needs, we
            have expanded our coverage area to include the entire Tohoku region,
            extending from Hokkaido in the north to Nagano Prefecture in the
            south.
          </motion.p>
        </div>
        <div ref={ref4} className="">
          <motion.p animate={animation4} className="">
            In 2025, to address the significant shortage of approximately
            430,000 personnel in the medical and caregiving industries, Hiro
            Career Staff will propose new ways of working and new career plans
            for medical and caregiving professionals. Our mission is to provide
            services that satisfy both our client companies and job seekers in
            the medical and caregiving professions. As evidence of this
            commitment, we regard "Customer First" (C1) as the core of our
            company's operations, which is shared by all employees.
          </motion.p>
        </div>
        <div ref={ref5} className="">
          <motion.p animate={animation5} className="">
            In 2025, to address the significant shortage of approximately
            430,000 personnel in the medical and caregiving industries, Hiro
            Career Staff will propose new ways of working and new career plans
            for medical and caregiving professionals. Our mission is to provide
            services that satisfy both our client companies and job seekers in
            the medical and caregiving professions. As evidence of this
            commitment, we regard "Customer First" (C1) as the core of our
            company's operations, which is shared by all employees.
          </motion.p>
        </div>
        <div ref={ref6} className="">
          <motion.p animate={animation6} className="">
            The individuals working in the medical and caregiving industries are
            wonderful people who possess a spirit of dedication to society and
            others. By providing an environment where such individuals can feel
            happy and fulfilled in their work, our business will continue to
            thrive.
          </motion.p>
        </div>

        <div ref={ref7} className="">
          <motion.p animate={animation7} className="">
            For the dispatched staff working with Hiro Career Staff, we provide
            tailored career support, peace of mind through welfare benefits, and
            support to reduce turnover at the facilities to which they are
            introduced. We believe that our daily efforts contribute to
            alleviating the shortage of personnel across the entire industry,
            and we will continue to expand our business.
          </motion.p>
        </div>
        <div ref={ref8} className="">
          <motion.p animate={animation8} className="">
            We sincerely appreciate your understanding and support.
          </motion.p>
        </div>
        <div ref={ref9} className=""></div>
        <motion.div animate={animation9} className="flex flex-col">
          <p className="">Hiro Career Staff Co., Ltd.</p>
          <p className="">Representative Director: Hiroyuki Usuzawa</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPresidentGreeting;
