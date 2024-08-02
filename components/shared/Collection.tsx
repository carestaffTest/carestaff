import React from "react";
import Card from "./Card";
import { getAllEmployer } from "@/lib/actions/employers.action";

type CollectionProps = {
  jobsData: any;
  emptyTitle: string;
  limit: number;
};

const Collection = ({
  jobsData,
  emptyTitle,
}: CollectionProps) => {
  return (
    <>
      {jobsData.length > 0 ? (
        <div className="flex-center flex-col w-full">
          <ul className="flex w-full flex-col gap-5  xl:gap-7 2xl:gap-16 lg:flex-row lg:justify-center">
            {jobsData.map(async (recentJob: any, index: any) => {
              const pageEmployer = 1;
              const searchTextEmployer = recentJob?.companyName;

              const employerData = await getAllEmployer({
                query: searchTextEmployer,
                page: pageEmployer,
                limit: 10,
              });
              return (
                <li
                  key={recentJob?._id}
                  className="flex justify-center md:justify-none"
                >
                  <Card
                    recentJob={recentJob}
                    employerData={employerData?.data}
                    duration={index}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
        </div>
      )}
    </>
  );
};

export default Collection;
