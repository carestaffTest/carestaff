import ViewJobDetailsLeft from "@/components/shared/ViewJobDetailsLeft";
import ViewJobDetailsRight from "@/components/shared/ViewJobDetailsRight";
import { getAllEmployer } from "@/lib/actions/employers.action";
import { getJobById } from "@/lib/actions/jobs.actions";
import { JobDetailsDetailsProps, SearchParamProps } from "@/types";
import React from "react";

const ViewJobDetails = async ({ params: { id } }: JobDetailsDetailsProps) => {
  const jobDetails = await getJobById(id);

  const employer = await getAllEmployer({
    query: jobDetails.companyName,
    limit: 1,
    page: 1,
  });

  return (
    <div className="wrapper flex flex-col md:flex-row my-5 md:my-10 gap-10 md:gap-5">
      <div className="flex w-full md:w-1/2">
        <ViewJobDetailsLeft jobDetails={jobDetails} employer={employer?.data} />
      </div>
      <div className="flex w-full md:w-1/2">
        <ViewJobDetailsRight />
      </div>
    </div>
  );
};

export default ViewJobDetails;
