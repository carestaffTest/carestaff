"use client";

import { adminHeaderLinks, staffHeaderLinks } from "@/constant";
import { usePathname } from "next/navigation";
import React from "react";
import BoxButton from "./BoxButton";

const AdminHomepage = ({ userPosition }: any) => {
  const pathname = usePathname();
  const links = userPosition === "Admin" ? adminHeaderLinks : staffHeaderLinks;

  return (
    <>
      <ul className="flex-center w-full flex-col items-start gap-5 md:flex-row py-10">
        {links.map((link) => {
          const isActive = pathname === link.route;

          return (
            <li
              key={link.route}
              className={`${
                isActive && "text-primary-500"
              } flex-center p-medium-16 whitespace-nowrap`}
            >
              <BoxButton
                label={link.label}
                route={link.route}
                image={link.image}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AdminHomepage;
