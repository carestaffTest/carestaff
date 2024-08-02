import JobDetailsForm from "@/components/shared/JobDetailsForm";
import { Separator } from "@/components/ui/separator";
import { getJobById } from "@/lib/actions/jobs.actions";
import { UpdateJobDetailsProps } from "@/types";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const UpdateJob = async ({ params: { id } }: UpdateJobDetailsProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as any;

  const jobDetail = await getJobById(id);

  return (
    <>
      <section className="wrapper py-5">
        <h3 className="h3-bold text-center sm:text-left">Edit Job Details</h3>
        <Separator className="h-2 my-5 bg-[#53D1D1]" />
      </section>
      <div className="wrapper mb-5">
        <JobDetailsForm
          userId={userId}
          type="Update"
          jobDetail={jobDetail}
          jobDetailId={jobDetail._id}
        />
      </div>
    </>
  );
};

export default UpdateJob;
