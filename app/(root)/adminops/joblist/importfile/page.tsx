import ImportFileUpload from "@/components/shared/ImportFileUpload";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const ImportFile = async () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as any;

  return (
    <div className="wrapper flex flex-col container mx-auto gap-5">
      <h1 className="flex-center text-2xl font-bold mb-4">
        File Upload and Convert to JSON
      </h1>

      <div className="w-full flex-center flex-col gap-5">
        <ImportFileUpload userId={userId} />
      </div>
    </div>
  );
};

export default ImportFile;
