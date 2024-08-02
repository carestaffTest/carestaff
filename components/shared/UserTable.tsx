"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Tablerow from "./Tablerow";

const UserTable = ({ usersData }: { usersData: any[] }) => {
  return (
    <>
      <Table>
        <TableCaption>A list of your recent added staff.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">
              <p className="min-w-[150px]">Action</p>
            </TableHead>
            <TableHead className="text-center">
              <p className="min-w-[150px]">Email Address</p>
            </TableHead>
            <TableHead className="text-center">
              <p className="min-w-[150px]">First Name</p>
            </TableHead>
            <TableHead className="text-center">
              <p className="min-w-[150px]">Last Name</p>
            </TableHead>
            <TableHead className="text-center">
              <p className="min-w-[150px]">Role</p>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usersData?.length > 0 ? (
            usersData?.map((user: any) => {
              return <Tablerow key={user._id} user={user} />;
            })
          ) : (
            <TableRow>
              <TableCell>No Records</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default UserTable;
