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
import JobsTableRow from "./JobsTableRow";

const JobsTable = ({ jobsData }: { jobsData: any[] }) => {
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
              <p className="min-w-[150px]">Job Number</p>
            </TableHead>
            <TableHead className="text-center">
              <p className="min-w-[150px]">Job Title</p>
            </TableHead>
            <TableHead className="text-center">
              <p className="min-w-[150px]">Industry</p>
            </TableHead>
            <TableHead className="text-center">
              <p className="min-w-[150px]">Work Location</p>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobsData?.length > 0 ? (
            jobsData?.map((job: any) => {
              return <JobsTableRow key={job._id} job={job} />;
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

export default JobsTable;
