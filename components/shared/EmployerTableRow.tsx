import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";

const EmployerTableRow = ({ employer }: { employer: any }) => {
  return (
    <TableRow key={employer._id}>
      <TableCell className="flex-center gap-5 flex-row py-3">
        <Link href={`/adminops/employer/${employer._id}/delete`}>
          <button className="p-2">
            <Trash2 className="text-red-800 cursor-pointer hover:text-red-500" />
          </button>
        </Link>
        <Link href={`/adminops/employer/${employer._id}/update`}>
          <button className="p-2">
            <SquarePen className="text-violet-800 cursor-pointer hover:text-violet-500" />
          </button>
        </Link>
      </TableCell>
      <TableCell className="text-center">{employer.companyName}</TableCell>
      <TableCell className="text-center">{employer.companyEmail}</TableCell>
      <TableCell className="text-center">{employer.companyNumber}</TableCell>
      <TableCell className="text-center">{employer.companyLocation}</TableCell>
    </TableRow>
  );
};

export default EmployerTableRow;
