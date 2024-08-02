import { aboutUsLinks, homeLinks } from "@/constant";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserFooter = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-[#53D1D1] h-[35px]"></div>

      <div className="w-full bg-[#ecfbfb]">
        <div className="wrapper w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
          <div className="">
            <div className="">
              <p className="flex text-center items-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
                <span className="text-[#53d1d1] h5-bold">{">"}</span>
                <Link href="/">Home</Link>
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start text-[#f5c01b]">
              <ul className="flex flex-col gap-2 pl-4">
                {homeLinks.map((homelink: any) => {
                  return (
                    <li
                      key={homelink.key}
                      className="flex items-center justify-center md:justify-start p-regular-14"
                    >
                      <a href={homelink.sectionLink}>
                        <p>{homelink.section}</p>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="">
            <p className="flex text-center items-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
              <span className="text-[#53d1d1] h5-bold">{">"}</span>
              <Link href="/listofjobs">Jobs</Link>
            </p>
          </div>
          <div className="">
            <div className="">
              <p className="flex text-center items-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
                <span className="flex-center text-[#53d1d1] h5-bold">
                  {">"}
                </span>
                <Link href="/aboutus">About Us</Link>
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start text-[#f5c01b]">
              <ul className="flex flex-col gap-2 pl-4">
                {aboutUsLinks.map((aboutuslink: any) => {
                  return (
                    <li
                      key={aboutuslink.key}
                      className="flex items-center justify-center md:justify-start p-regular-14"
                    >
                      <a href={aboutuslink.sectionLink}>
                        <p>{aboutuslink.section}</p>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="">
            <p className="flex text-center items-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
              <span className="text-[#53d1d1] h5-bold">{">"}</span>
              <Link href="/faqs">FAQS</Link>
            </p>
          </div>
          <div className="">
            <p className="flex text-center items-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
              <span className="text-[#53d1d1] h5-bold">{">"}</span>
              <Link href="/contactus">Contact us</Link>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="flex text-center items-center justify-center md:justify-start p-semibold-18 text-[#e27107] mb-2">
                <span className="text-[#53d1d1] h5-bold">{">"}</span>{" "}
                <Link href="/siteterms">Site Terms of Use</Link>
              </p>
              <p className="flex text-center items-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
                <span className="text-[#53d1d1] h5-bold">{">"}</span>
                <Link href="/privacypolicy">Privacy Policy</Link>
              </p>
            </div>
            <div className="">
              <p className="flex text-center items-center justify-center md:justify-start p-regular-14 text-[#e27107] gap-2 lg:gap-1 mb-3">
                <span className="text-[#53d1d1]">
                  <Mail />
                </span>{" "}
                iwate@care-staff.co.jp
              </p>
            </div>
            <div className="">
              <p className="flex text-center items-center justify-center md:justify-start p-regular-14 text-[#e27107] gap-2 lg:gap-1 mb-3">
                <span className="text-[#53d1d1]">
                  <Phone />
                </span>
                0120070775
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center flex-row gap-5">
              <div className="">
                <Image
                  src="/assets/icons/fbicon.png"
                  alt="fbicon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="">
                <Image
                  src="/assets/icons/igicon.png"
                  alt="igicon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="">
                <Image
                  src="/assets/icons/hiroicon.png"
                  alt="hiroicon"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#53D1D1]">
        <div className="wrapper flex-center">
          <p className="text-white p-regular-16">
            Copyright © 2024 HirocareerStaff Corporation. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
