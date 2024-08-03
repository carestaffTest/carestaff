"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { aboutUsTableSecond } from "@/constant";
import AboutUsListOfOfficesCell from "./AboutUsListOfOfficesCell";

const AboutUsListOfOffices = () => {
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
  return (
    <div className="flex-center flex-col gap-5 md:gap-10 wrapper">
      <div ref={ref} className="w-full flex-center">
        <motion.div
          animate={animation1}
          className="w-full flex items-center pl-2 md:pl-5 bg-blue-stripe-img bg-content bg-center h-[50px] border border-[#53d1d1] text-[#53d1d1] p-bold-16 md:h5-bold"
        >
          List of Offices
        </motion.div>
      </div>
      <div className="w-full flex-center">
        <Table>
          <TableBody>
            {aboutUsTableSecond.map((tablerowtwo: any) => {
              return (
                <TableRow key={tablerowtwo.key}>
                  <AboutUsListOfOfficesCell
                    office={tablerowtwo.office}
                    address={tablerowtwo.address}
                    telNumber={tablerowtwo.telNumber}
                    fax={tablerowtwo.fax}
                    email={tablerowtwo.email}
                  />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AboutUsListOfOffices;
