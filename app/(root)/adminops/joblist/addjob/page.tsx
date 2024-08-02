import JobDetailsForm from "@/components/shared/JobDetailsForm";
import { Separator } from "@/components/ui/separator";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const AddJob = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as any;
  return (
    <>
      <section className="wrapper py-5">
        <h3 className="h3-bold text-center sm:text-left">Create Job Details</h3>
        <Separator className="h-2 my-5 bg-[#53D1D1]" />
      </section>
      <div className="wrapper mb-5">
        <JobDetailsForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default AddJob;
