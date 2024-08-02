"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmployerTableRow from "./EmployerTableRow";

const EmployerTable = ({ employerData }: { employerData: any[] }) => {
  return (
    <>
      <Table>
        <TableCaption>A list of your recent added job.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">
              <p className="min-w-[150px]">Action</p>
            </TableHead>
            <TableHead className="text-center">
              <p className="min-w-[150px]">Company Name</p>
            </TableHead>
            <TableHead className="text-center">
              <p className="min-w-[150px]">Company Email</p>
            </TableHead>
            <TableHead className="text-center">
              <p className="min-w-[150px]">Company Number</p>
            </TableHead>
            <TableHead className="text-center">
              <p className="min-w-[150px]">Company Location</p>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employerData?.length > 0 ? (
            employerData?.map((employer: any) => {
              return (
                <EmployerTableRow key={employer._id} employer={employer} />
              );
            })
          ) : (
            <TableRow>
              <TableCell>No Records</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default EmployerTable;
