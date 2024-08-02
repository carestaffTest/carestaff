import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HomepageCarouselItem = ({
  image,
  contentFirst,
  contentSecond,
  route,
  buttonContent,
}: any) => {
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
          duration: 2,
          type: "spring",
          bounce: 0.3,
          delay: 1,
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
    if (inView1) {
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
  }, [inView1, animation2]);
  return (
    <div
      className="w-full h-[210px] md:h-[420px] flex-center bg-cover bg-center gap-5 md:gap-20 flex-col pt-5 md:pt-10 relative"
      style={{ backgroundImage: `url(${image})` }}
      ref={ref}
    >
      <div className="flex w-full h-[210px] md:h-[420px] absolute top-0 left-0 bg-black/30 z-20"></div>

      {contentFirst && (
        <motion.p
          animate={animation1}
          className="flex-center text-center text-white w-3/4 lg:w-1/2 z-30 p-semibold-14 md:h5-bold"
        >
          {contentFirst}
        </motion.p>
      )}
      {contentSecond && (
        <motion.p
          animate={animation1}
          className="flex-center text-center text-white w-3/4 lg:w-1/2 z-30 p-semibold-14 md:h5-bold"
        >
          {contentSecond}
        </motion.p>
      )}
      <Link href={route} className="flex z-30">
        <motion.button
          animate={animation2}
          className="flex-center rounded-full bg-[#e47e1e] py-2 pl-8 pr-16 text-white p-semibold-14 md:p-semibold-20 relative"
        >
          <p className="flex-center gap-3">
            {buttonContent}{" "}
            <span className="absolute right-2">
              <ArrowRight className="rounded-full p-2 bg-white text-[#e47e1e] h-8 w-8" />
            </span>
          </p>
        </motion.button>
      </Link>
    </div>
  );
};

export default HomepageCarouselItem;
