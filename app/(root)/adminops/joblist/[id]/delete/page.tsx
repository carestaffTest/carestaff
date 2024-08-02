import JobDeleteButton from "@/components/shared/JobDeleteButton";
import { Button } from "@/components/ui/button";
import { getJobById } from "@/lib/actions/jobs.actions";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

type DeleteJobProps = {
  params: {
    id: string;
  };
};

const DeleteJob = async ({ params: { id } }: DeleteJobProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const job = await getJobById(id);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center">Delete Job</h3>
      </section>

      <div className="wrapper my-8 max-w-5xl flex-center gap-2 md:gap-5 flex-col">
        <p className="justify-center text-center p-semibold-18 md:p-bold-24">
          Do you really want to delete the{" "}
          <span className="text-red-600">{job.jobType}</span>?
        </p>
        <div className="flex-center flex-col md:flex-row gap-2 md:gap-4  w-full md:max-w-xl">
          <Button size="lg" className="button w-full">
            <Link href="/adminops/joblist">Cancel</Link>
          </Button>
          <JobDeleteButton job={job} userId={userId} />
        </div>
      </div>
    </>
  );
};

export default DeleteJob;
