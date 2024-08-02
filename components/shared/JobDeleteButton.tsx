"use client";

import { deleteJob } from "@/lib/actions/jobs.actions";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

const JobDeleteButton = ({ userId, job }: any) => {
  const router = useRouter();
  const { toast } = useToast();

  const deleteJobOnclick = async () => {
    if (!userId) {
      router.back();
      return;
    }

    await deleteJob({ jobId: job, path: "/adminops/joblist" });
    toast({
      variant: "success",
      title: "Successfully",
      description: "Deleting Job successfully.",
    });
    router.push("/adminops/joblist");
  };

  return (
    <div className="w-full">
      <Button size="lg" className="button w-full" onClick={deleteJobOnclick}>
        Delete
      </Button>
    </div>
  );
};

export default JobDeleteButton;
