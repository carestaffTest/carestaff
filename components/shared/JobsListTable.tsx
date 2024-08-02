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
import JobListTableRow from "./JobListTableRow";

const JobsListTable = ({ jobsData }: { jobsData: any[] }) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">
              <p className="min-w-[150px] p-medium-16 md:p-semibold-20">
                Job Title
              </p>
            </TableHead>
            <TableHead className="">
              <p className="min-w-[150px] p-medium-16 md:p-semibold-20">
                Salary Range
              </p>
            </TableHead>
            <TableHead className="">
              <p className="min-w-[175px] p-medium-16 md:p-semibold-20">
                Employer Name
              </p>
            </TableHead>
            <TableHead className="">
              <p className="min-w-[150px] p-medium-16 md:p-semibold-20">
                Industry
              </p>
            </TableHead>
            <TableHead className="">
              <p className="min-w-[150px] p-medium-16 md:p-semibold-20">
                Work Location
              </p>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobsData?.length > 0 ? (
            jobsData?.map((job: any) => {
              return <JobListTableRow key={job._id} job={job} />;
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

export default JobsListTable;
