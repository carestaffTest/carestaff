"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { aboutUsTableOne } from "@/constant";
import Image from "next/image";
import AboutUsCompanyProfileTableCell from "./AboutUsCompanyProfileTableCell";

const AboutUsCompanyProfile = () => {
  const animation1 = useAnimation();
  const animation3 = useAnimation();
  const { ref: ref, inView: inView1 } = useInView({
    threshold: 0.5,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      animation1.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.1,
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

  useEffect(() => {
    if (inView3) {
      animation3.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.1,
          delay: 0.3,
        },
      });
    } else {
      animation3.start({
        opacity: -100,
        y: 100,
      });
    }
  }, [inView3, animation3]);
  return (
    <div className="flex-center flex-col gap-5 md:gap-10 wrapper">
      <div ref={ref} className="w-full flex-center">
        <motion.div
          animate={animation1}
          className="w-full flex items-center pl-2 md:pl-5 bg-blue-stripe-img bg-content bg-center h-[50px] border border-[#53d1d1] text-[#53d1d1] p-bold-16 md:h5-bold"
        >
          Company Profile
        </motion.div>
      </div>
      <div className="w-full flex-center">
        <div className="">
          <Table>
            <TableBody>
              {aboutUsTableOne.map((tablerowone: any) => {
                return (
                  <TableRow key={tablerowone.key}>
                    <AboutUsCompanyProfileTableCell
                      left={tablerowone.left}
                      right={tablerowone.right}
                    />
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
      <div ref={ref3} className="w-full flex-center">
        <motion.div
          animate={animation3}
          className="flex-center max-w-[300px] md:max-w-[600px] "
        >
          <Image
            src="/assets/images/office-photo.png"
            width={600}
            height={480}
            alt="Profile Picture"
            className="flex rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsCompanyProfile;
