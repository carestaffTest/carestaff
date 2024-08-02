"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { deleteEmployer } from "@/lib/actions/employers.action";

const EmployerDeleteButton = ({ userId, employer }: any) => {
  const router = useRouter();
  const { toast } = useToast();

  const deleteJobOnclick = async () => {
    if (!userId) {
      router.back();
      return;
    }

    await deleteEmployer({ employerId: employer, path: "/adminops/employer" });
    toast({
      variant: "success",
      title: "Successfully",
      description: "Deleting Employer successfully.",
    });
    router.push("/adminops/employer");
  };

  return (
    <div className="w-full">
      <Button size="lg" className="button w-full" onClick={deleteJobOnclick}>
        Delete
      </Button>
    </div>
  );
};

export default EmployerDeleteButton;
