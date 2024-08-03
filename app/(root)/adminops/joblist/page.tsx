import JobsTable from "@/components/shared/JobsTable";
import Pagination from "@/components/shared/Pagination";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAllJobs } from "@/lib/actions/jobs.actions";
import { SearchParamProps } from "@/types";
import Link from "next/link";
import React from "react";

const JobListPage = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";

  const jobsData = await getAllJobs({
    query: searchText,
    page,
    limit: 10,
  });

  const totalPages = jobsData?.totalPages ? jobsData?.totalPages : 0;

  return (
    <div className="wrapper">
      <p className="h3-bold uppercase">Job List</p>

      <Separator className="h-2 my-5 bg-[#53D1D1]" />
      <div className="flex gap-3 relative w-full">
        <Search placeholder="Search Job Title..." />
        <Button>
          <Link href="/adminops/joblist/importfile">Import files</Link>
        </Button>
        <Button>
          <Link href="/adminops/joblist/addjob">Create new Job</Link>
        </Button>
      </div>

      <div className="flex-center py-5 gap-5 flex-col">
        <JobsTable jobsData={jobsData?.data} />
        {totalPages > 1 && (
          <Pagination urlParamName="page" page={page} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
};

export default JobListPage;
