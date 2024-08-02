import EmployerForm from "@/components/shared/EmployerForm";
import { Separator } from "@/components/ui/separator";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const CreateEmployer = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as any;
  return (
    <>
      <section>
        <div className="wrapper">
          <p className="h3-bold uppercase">Add Employer Info</p>

          <Separator className="h-2 my-5 bg-[#53D1D1]" />
        </div>
      </section>
      <div className="wrapper flex-center gap-3 relative w-full px-5 mb-5">
        <EmployerForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEmployer;
