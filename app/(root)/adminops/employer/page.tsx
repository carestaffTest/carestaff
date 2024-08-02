import EmployerTable from "@/components/shared/EmployerTable";
import Pagination from "@/components/shared/Pagination";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAllEmployer } from "@/lib/actions/employers.action";
import { SearchParamProps } from "@/types";
import Link from "next/link";
import React from "react";

const EmployerPage = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";

  const employerData = await getAllEmployer({
    query: searchText,
    page,
    limit: 10,
  });

  const totalPages = employerData?.totalPages ? employerData?.totalPages : 0;

  return (
    <div className="wrapper">
      <p className="h3-bold uppercase">Employer List</p>

      <Separator className="h-2 my-5 bg-[#53D1D1]" />
      <div className="flex gap-3 relative w-full">
        <Search placeholder="Search Company Name..." />
        <Button>
          <Link href="/adminops/employer/addemployer">
            Create Employer Details
          </Link>
        </Button>
      </div>

      <div className="flex-center py-5 gap-5 flex-col">
        <EmployerTable employerData={employerData?.data} />
        {totalPages > 1 && (
          <Pagination urlParamName="page" page={page} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
};

export default EmployerPage;
