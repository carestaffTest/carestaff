import React from "react";
import { Separator } from "@/components/ui/separator";

import { getAllUsers, getUserById } from "@/lib/actions/user.actions";
import { SearchParamProps } from "@/types";
import Search from "@/components/shared/Search";
import UserTable from "@/components/shared/UserTable";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import Pagination from "@/components/shared/Pagination";

const StaffPage = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";

  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as any;
  const user = await getUserById(userId);

  const usersData = await getAllUsers({
    query: searchText,
    page,
    limit: 10,
  });

  const totalPages = usersData?.totalPages ? usersData?.totalPages : 0;

  return (
    <>
      <div className="wrapper">
        {user.position === "Staff" ? (
          <div className="w-full flex-center">
            <p>
              You're not allowed to go here. Please go back to{" "}
              <Link
                href="/adminops"
                className="p-bold-16 underline underline-offset-8"
              >
                Homepage
              </Link>
            </p>
          </div>
        ) : (
          <>
            <p className="h3-bold uppercase">Users List</p>

            <Separator className="h-2 mt-5 mb-10 bg-[#53D1D1]" />
            <div className="flex gap-3 relative w-full">
              <Search />
            </div>

            <div className="flex-center py-5 gap-5 flex-col">
              <UserTable usersData={usersData?.data} />
              {totalPages > 1 && (
                <Pagination
                  urlParamName="page"
                  page={page}
                  totalPages={totalPages}
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StaffPage;
