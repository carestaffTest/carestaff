import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";

const JobsTableRow = ({ job }: { job: any }) => {
  return (
    <TableRow key={job._id}>
      <TableCell className="flex-center gap-5 flex-row py-3">
        <Link href={`/adminops/joblist/${job._id}/delete`}>
          <button className="p-2">
            <Trash2 className="text-red-800 cursor-pointer hover:text-red-500" />
          </button>
        </Link>
        <Link href={`/adminops/joblist/${job._id}/update`}>
          <button className="p-2">
            <SquarePen className="text-violet-800 cursor-pointer hover:text-violet-500" />
          </button>
        </Link>
      </TableCell>
      <TableCell className="text-center">{job.jobNumber}</TableCell>
      <TableCell className="text-center">{job.jobType}</TableCell>
      <TableCell className="text-center">{job.industry}</TableCell>
      <TableCell className="text-center">{job.workLocation}</TableCell>
    </TableRow>
  );
};

export default JobsTableRow;
