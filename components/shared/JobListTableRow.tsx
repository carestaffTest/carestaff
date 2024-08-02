"use client";

import React, { useEffect, useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

const JobListTableRow = ({ job }: { job: any }) => {
  const date = job.createdAt;
  const [timeDifference, setTimeDifference] = useState<string>("");

  const formatTimeDifference = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const years = Math.floor(diffInSeconds / (365 * 24 * 60 * 60));
    if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;

    const months = Math.floor(diffInSeconds / (30 * 24 * 60 * 60));
    if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;

    const days = Math.floor(diffInSeconds / (24 * 60 * 60));
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;

    const hours = Math.floor(diffInSeconds / (60 * 60));
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

    const minutes = Math.floor(diffInSeconds / 60);
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

    return `${diffInSeconds} second${diffInSeconds > 1 ? "s" : ""} ago`;
  };

  useEffect(() => {
    function updateTimeDifference() {
      setTimeDifference(formatTimeDifference(date));
    }

    updateTimeDifference();
    const interval = setInterval(updateTimeDifference, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <TableRow key={job._id}>
        <TableCell className="p-mdium-14 md:p-semibold-18">
          <Link href={`/listofjobs/${job._id}/viewjob`}>
            <p className="text-[#e27107] ">{job.jobType}</p>
          </Link>
          <p className="p-regular-12 md:p-regular-14">{timeDifference}</p>
        </TableCell>
        <TableCell className="p-regular-14 md:p-regular-14">
          {job.salaryRange}
        </TableCell>
        <TableCell className="p-regular-14 md:p-regular-14">
          <p>{job.companyName}</p>
        </TableCell>
        <TableCell className="p-regular-14 md:p-regular-14">
          {job.industry}
        </TableCell>
        <TableCell className="p-regular-14 md:p-regular-14">
          {job.workLocation}
        </TableCell>
      </TableRow>
    </>
  );
};

export default JobListTableRow;
