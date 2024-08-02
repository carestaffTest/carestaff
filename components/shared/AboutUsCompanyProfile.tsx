import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { aboutUsTableOne } from "@/constant";
import Image from "next/image";

const AboutUsCompanyProfile = () => {
  return (
    <div className="flex-center flex-col gap-5 md:gap-10 wrapper">
      <div className="w-full flex items-center pl-2 md:pl-5 bg-blue-stripe-img bg-content bg-center h-[50px] border border-[#53d1d1] text-[#53d1d1] p-bold-16 md:h5-bold">
        Company Profile
      </div>
      <div className="">
        <Table>
          <TableBody>
            {aboutUsTableOne.map((tablerowone: any) => {
              return (
                <TableRow key={tablerowone.key}>
                  <TableCell className="bg-[#ede8e8] p-regular-12 md:p-regular-16">
                    {tablerowone.left}
                  </TableCell>
                  <TableCell className="p-regular-12 md:p-regular-16">
                    {tablerowone.right}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="flex-center max-w-[300px] md:max-w-[600px] ">
        <Image
          src="/assets/images/office-photo.png"
          width={600}
          height={480}
          alt="Profile Picture"
          className="flex rounded-2xl"
        />
      </div>
    </div>
  );
};

export default AboutUsCompanyProfile;
