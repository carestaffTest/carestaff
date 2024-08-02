import EmployerDeleteButton from "@/components/shared/EmployerDeleteButton";
import { Button } from "@/components/ui/button";
import { getEmployerById } from "@/lib/actions/employers.action";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

type DeleteEmployerProps = {
  params: {
    id: string;
  };
};

const EmployerDelete = async ({ params: { id } }: DeleteEmployerProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const employer = await getEmployerById(id);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center">Delete Employer</h3>
      </section>

      <div className="wrapper my-8 max-w-5xl flex-center gap-2 md:gap-5 flex-col">
        <p className="justify-center text-center p-semibold-18 md:p-bold-24">
          Do you really want to delete{" "}
          <span className="text-red-600">{employer.companyName}</span>?
        </p>
        <div className="flex-center flex-col md:flex-row gap-2 md:gap-4  w-full md:max-w-xl">
          <Button size="lg" className="button w-full">
            <Link href="/adminops/employer">Cancel</Link>
          </Button>
          <EmployerDeleteButton employer={employer} userId={userId} />
        </div>
      </div>
    </>
  );
};

export default EmployerDelete;
