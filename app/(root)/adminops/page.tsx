import AdminHomepage from "@/components/shared/AdminHomepage";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const AdminPage = async () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as any;
  const user = await getUserById(userId);
  return (
    <>
      <div className="wrapper">
        {user.position === "User" ? (
          <>
            <div className="w-full flex-center">
              <p>
                Your not allowed to go here. Please go back to{" "}
                <Link
                  href="/"
                  className="p-bold-16 underline underline-offset-8"
                >
                  Homepage
                </Link>
              </p>
            </div>
          </>
        ) : (
          <AdminHomepage userPosition={user.position} />
        )}
      </div>
    </>
  );
};

export default AdminPage;
