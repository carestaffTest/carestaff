"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUsPhotoAndParagraph = () => {
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
          duration: 1,
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
  return (
    <div ref={ref} className="w-full flex-center flex-col gap-5 md:gap-10">
      <motion.div animate={animation1} className="w-full">
        <Image
          src="/assets/images/contact-us-photo.png"
          width={600}
          height={480}
          alt="Profile Picture"
          className="flex rounded-2xl"
        />
      </motion.div>
      <div className="w-full">
        <p className="text-justify">
          For inquiries about how to use the site and employment for job
          seekers, inquiries about recruitment from companies considering
          hiring, requests for materials, etc., please fill out the form below
          and send it.
        </p>
      </div>
    </div>
  );
};

export default ContactUsPhotoAndParagraph;
