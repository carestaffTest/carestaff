"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ recentJob, employerData, duration }: any) => {
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
          duration: 1,
          bounce: 0.3,
          delay: 1,
        },
      });
    } else {
      animation1.start({
        opacity: 0,
        x: Number(-100 * Number(duration + 1)),
      });
    }
  }, [inView1, animation1]);

  return (
    <div 
    ref={ref}>
      <motion.div
        animate={animation1}
        className="flex w-[18rem] xl:w-[20rem] 2xl:w-[22rem] border border-slate-300 flex-col gap-2 p-5 shadow-lg shadow-slate-700 bg-white rounded-2xl"
      >
        <div className="flex w-full h-[70px] mb-2">
          {employerData && employerData.length > 0 ? (
            employerData.map((employer: any) => {
              return (
                <div className="flex w-full" key={employer._id}>
                  <Image
                    src={
                      employer.imageUrl
                        ? employer.imageUrl
                        : "/assets/images/No_Image.png"
                    }
                    alt={recentJob.companyName}
                    width={250}
                    height={250}
                    className="w-full object-left object-contain"
                  />
                </div>
              );
            })
          ) : (
            <div className="flex w-full">
              <Image
                src="/assets/images/No_Image.png"
                alt={recentJob.companyName}
                width={250}
                height={250}
                className="w-full object-left object-contain"
              />
            </div>
          )}
        </div>
        <div className="flex text-[#e27107] p-bold-16">{recentJob.jobType}</div>
        <div className="flex p-medium-16">{recentJob.companyName}</div>
        <div className="flex p-regular-14">{recentJob.industry}</div>
        <div className="flex p-regular-14">{recentJob.workLocation}</div>
        <div className="w-full text-[#0099ff] p-bold-16">
          <Link href={`/listofjobs/${recentJob._id}/viewjob`}>View</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
