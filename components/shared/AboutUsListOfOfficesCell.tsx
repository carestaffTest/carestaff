"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TableCell } from "@/components/ui/table";

const AboutUsListOfOfficesCell = ({
  office,
  address,
  telNumber,
  fax,
  email,
}: any) => {
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
    <>
      <TableCell className="bg-[#ede8e8] p-regular-12 md:p-regular-16">
        <div ref={ref2} className="w-full">
          <motion.div animate={animation2} className="w-full">
            {office}
          </motion.div>
        </div>
      </TableCell>
      <TableCell className="p-regular-12 md:p-regular-16">
        <div ref={ref2} className="flex flex-col">
          <motion.p animate={animation2} className="">
            {address}
          </motion.p>
          <motion.p animate={animation2} className="flex flex-row gap-5">
            {telNumber}
            <span className="">{fax}</span>
            <span className="">{email}</span>
          </motion.p>
        </div>
      </TableCell>
    </>
  );
};

export default AboutUsListOfOfficesCell;
