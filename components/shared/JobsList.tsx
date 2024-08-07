import {
  getAllJobs,
  getAllJobsSearch,
  getRecomendedJobs,
} from "@/lib/actions/jobs.actions";
import React from "react";
import JobsListTable from "./JobsListTable";
import JobsListCollection from "./JobsListCollection";
import Pagination from "./Pagination";
import Search from "./Search";
import JobListEmploymentTypeFilter from "./JobListEmploymentTypeFilter";
import JobListLocationSearch from "./JobListLocationSearch";
import JobListEmploymentStatus from "./JobListEmploymentStatus";

const JobsList = async ({ page, jobTitle, location, status, type }: any) => {
  const jobsData = await getAllJobsSearch({
    jobtitle: jobTitle,
    location,
    status,
    type,
    page,
    limit: 10,
  });

  const totalPages = jobsData?.totalPages ? jobsData?.totalPages : 0;

  const jobsDataRight = await getRecomendedJobs({
    query: "Recommended",
    page: 1,
    limit: 3,
  });

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex bg-[#53d1d1] py-10">
        <div className="wrapper flex flex-col md:flex-row md:flex-center gap-5  px-3 md:px-5 p-bold-16 md:p-bold-20 xl:p-bold-24 transition-all duration-500">
          <div className="w-full md:w-1/2 flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-5">
            <div className="w-full flex flex-col relative">
              <Search placeholder="Search Job Title..." />
              <p className="flex absolute top-[-35px] md:top-[-35px] text-white">
                What
              </p>
            </div>
            <div className="w-full flex flex-col md:relative">
              <p className="flex md:absolute ttop-[-35px] md:top-[-35px] text-white">
                Where
              </p>
              <JobListLocationSearch placeholder="Search Location..." />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-5">
            <div className="w-full flex flex-col md:relative">
              <p className="flex md:absolute top-[-35px] md:top-[-35px] text-white">
                Employment Status
              </p>
              <div className="w-full">
                <JobListEmploymentStatus />
              </div>
            </div>
            <div className="w-full flex flex-col md:relative">
              <p className="flex md:absolute top-[-35px] md:top-[-35px] text-white">
                Employment Type
              </p>
              <div className="w-full">
                <JobListEmploymentTypeFilter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="wrapper flex flex-col md:flex-row py-3 md:py-10">
        <div className="w-full lg:w-4/6 flex items-center flex-col px-3 md:px-5">
          <JobsListTable jobsData={jobsData?.data} />
          {totalPages > 1 && (
            <Pagination
              urlParamName="page"
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
        <div className="hidden lg:w-2/6 lg:flex relative">
          <div className="w-full flex items-center flex-col py-5 px-10 rounded-2xl sticky gap-10">
            <div className="w-full flex justify-center p-bold-20 lg:p-bold-24 xl:h5-bold text-[#53d1d1] transition-all">
              <p>Recommended Jobs</p>
            </div>
            <JobsListCollection
              jobsData={jobsDataRight?.data}
              emptyTitle="No Jobs have been created yet"
              emptyStateSubtext="Go create some now"
              limit={3}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobsList;
