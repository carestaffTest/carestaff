"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { SignedIn, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import { Separator } from "../ui/separator";

const Header = ({ userPosition }: any) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header
      className={
        shadow
          ? "fixed w-full border-b bg-[#53D1D1] z-[100]"
          : "w-full border-b bg-[#53D1D1]/50 z-[100]"
      }
    >
      <div className="wrapper flex-between">
        <Link
          href="/adminops"
          className="w-56 lg:w-72 transition-all duration-500"
        >
          <Image
            src="/assets/images/care-staff-logo.jpg"
            width={300}
            height={36}
            alt="Care Staff logo"
          />
        </Link>

        <SignedIn>
          <div className="flex w-32 justify-end gap-5">
            <nav className="md:flex-between hidden">
              <NavItems userPosition={userPosition} />
            </nav>

            <UserButton afterSignOutUrl="/" />
            <div onClick={handleNav} className="lg:hidden">
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>
          </div>
        </SignedIn>
      </div>

      <div
        className={
          nav ? "lg:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[270px] h-full bg-white py-3 px-5 ease-in duration-500"
              : "fixed left-[-150%] top-0 p-2 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between mb-5 ">
              <Link href="/adminops" className="w-36">
                <Image
                  src="/assets/images/care-staff-logo.jpg"
                  width={128}
                  height={38}
                  alt="Care Staff logo"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pinter"
              >
                <Image
                  src="/assets/icons/close.svg"
                  alt="menu"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className="py-4 flex flex-col cursor-pointer mt-5">
            <ul className="flex w-full flex-col items-start gap-5 text-black">
              <NavItems userPosition={userPosition} />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
