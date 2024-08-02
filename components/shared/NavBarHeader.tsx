"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import Header from "./Header";

const NavBarHeader = ({ userPosition }: any) => {
  const pathname = usePathname();
  const [isAdminPath, setIsAdminPath] = useState(false);

  useEffect(() => {
    setIsAdminPath(pathname.includes("adminops"));
  }, [pathname]);

  return (
    <>{isAdminPath ? <Header userPosition={userPosition} /> : <UserHeader />}</>
  );
};

export default NavBarHeader;
