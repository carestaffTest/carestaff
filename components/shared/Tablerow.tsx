import React, { useEffect, useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { updatesUser } from "@/lib/actions/user.actions";
import { useToast } from "@/components/ui/use-toast";
import { SquarePen } from "lucide-react";
import Dropdown from "./Dropdown";

const Tablerow = ({ user }: { user: any }) => {
  const [role, setRole] = useState(user.position);
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

  const { toast } = useToast();

  const handleOnChange = (value: any) => {
    setRole(value);
  };

  useEffect(() => {
    setIsDisabled(role === user.position);
  }, [role, user.position]);

  const onUpdate = async () => {
    try {
      const updatedEvent = await updatesUser({
        userId: user._id,
        user: { ...user, position: role },
        path: `/adminops/user`,
      });

      if (updatedEvent) {
        toast({
          variant: "success",
          title: "Successfully",
          description: "Updated the Role of User.",
        });
        router.push(`/adminops/user`);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error Saving Changes",
        description: "Contact the Developer.",
      });
      console.error("Update error:", error);
    }
  };

  return (
    <TableRow key={user._id}>
      <TableCell className="text-center">
        <button
          onClick={onUpdate}
          disabled={isDisabled}
          className={
            isDisabled
              ? "p-1 "
              : "p-1 hover:border-2 hover:border-green-400 rounded-md"
          }
        >
          <SquarePen
            className={
              isDisabled
                ? "cursor-not-allowed text-violet-300"
                : "text-violet-800 cursor-pointer hover:text-violet-500"
            }
          />
        </button>
      </TableCell>
      <TableCell className="text-center">{user.email}</TableCell>
      <TableCell className="text-center">{user.firstName}</TableCell>
      <TableCell className="text-center">{user.lastName}</TableCell>
      <TableCell className="text-center">
        <Dropdown onChangeHandler={handleOnChange} value={role} />
      </TableCell>
    </TableRow>
  );
};

export default Tablerow;
