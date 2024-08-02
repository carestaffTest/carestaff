"use client";

import { useAnimation, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const HomepageWhoWeAre = () => {
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();

  const { ref: ref, inView: inView1 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref5, inView: inView5 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      animation1.start({
        opacity: 1,
        x: 0,
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
        x: -50,
      });
    }
  }, [inView1, animation1]);

  useEffect(() => {
    if (inView2) {
      animation2.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 2,
          type: "spring",
          bounce: 0.3,
          delay: 1,
        },
      });
    } else {
      animation2.start({
        opacity: 0,
        x: -50,
      });
    }
  }, [inView2, animation2]);

  useEffect(() => {
    if (inView3) {
      animation3.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 2,
          type: "spring",
          bounce: 0.3,
          delay: 1,
        },
      });
    } else {
      animation3.start({
        opacity: 0,
        x: -50,
      });
    }
  }, [inView3, animation3]);

  useEffect(() => {
    if (inView4) {
      animation4.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 4,
          type: "spring",
          bounce: 0.3,
          delay: 1,
        },
      });
    } else {
      animation4.start({
        opacity: 0,
        x: -50,
      });
    }
  }, [inView4, animation4]);

  useEffect(() => {
    if (inView5) {
      animation5.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 2,
          type: "spring",
          bounce: 0.3,
          delay: 1,
        },
      });
    } else {
      animation5.start({
        opacity: 0,
        x: 50,
      });
    }
  }, [inView5, animation5]);
  return (
    <>
      <div className="flex-center gap-5 flex-col md:flex-row ">
        <div className="w-full md:w-[50%]">
          <div className="w-full" ref={ref}>
            <motion.div
              animate={animation1}
              className="text-[#0099ff] p-regular-14"
            >
              Who We Are?
            </motion.div>
          </div>
          <div className="w-full" ref={ref2}>
            <motion.div animate={animation2} className="text-[#e5811e] h3-bold">
              CARE STAFF SERVICE
            </motion.div>
          </div>
          <div className="w-full" ref={ref3}>
            <motion.div animate={animation3} className="my-5">
              <p className="p-regular-18">
                "Care Staff Service" is a job platform managed by{" "}
                <span className="text-[#0000ee] underline-offset-1">
                  <a href="https://www.hirocareer.com/">
                    Hiro Career Staff Co., Ltd.
                  </a>
                </span>
                , specializing in nursing care facilities. We offer a wide range
                of job opportunities, including exclusive listings, openings for
                unqualified and inexperienced individuals, and full-time
                positions. The job openings of Hiro Career, who knows the local
                municipality well, are the result of our employees actually
                "seeing the facility" and "hearing directly from the person in
                charge of the facility". Our services extends to the
                Philippines, named “
                <span className="text-[#0000ee] underline-offset-1">
                  <a href="https://www.facebook.com/hiroglobal/">
                    Hiro Global Manpower Inc.
                  </a>
                </span>
                ” which is located in Makati City, a quality land-based
                recruitment agency.
              </p>
            </motion.div>
          </div>
          <div className="w-full" ref={ref4}>
            <motion.div animate={animation4} className="">
              <a href="/aboutus">
                <p className="flex gap-5 text-[#0099ff]">
                  Learn more about us
                  <span className="text-[#e5811e]">
                    <ArrowRight />
                  </span>
                </p>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex-center" ref={ref5}>
          <motion.div
            animate={animation5}
            className="bg-who-we-are-img bg-cover w-[774px] h-[516px] rounded-3xl bg-center"
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default HomepageWhoWeAre;
