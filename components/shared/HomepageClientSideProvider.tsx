"use client";

import React from "react";
import { useEffect } from "react";

const HomepageClientSideProvider = ({ children }: any) => {
  useEffect(() => {
    const smoothScroll = (targetId: any) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1)
          ? link.getAttribute("href")?.substring(1)
          : "";
        smoothScroll(targetId);
      });
    });
  }, []);

  return <>{children}</>;
};

export default HomepageClientSideProvider;
