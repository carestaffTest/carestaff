import React from "react";
import Collection from "./Collection";
import HomepageRecentJobCircleTop from "./HomepageRecentJobCircleTop";
import HomepageRecentJobCircleBottom from "./HomepageRecentJobCircleBottom";
import HomepageRecentJobViewAll from "./HomepageRecentJobViewAll";
import HomepageRecentJobTitle from "./HomepageRecentJobTitle";

const HomepageRecentJob = ({ jobsData }: any) => {
  return (
    <>
      <div className="wrapper flex-center w-full gap-5 py-5 px-2 bg-[#e0f3f3] flex-col relative overflow-hidden rounded-2xl">
        <HomepageRecentJobCircleTop />
        <HomepageRecentJobCircleBottom />
        <HomepageRecentJobTitle />
        <div className="flex z-10 w-full">
          <Collection
            jobsData={jobsData?.data}
            emptyTitle="No Jobs have been created yet"
            limit={3}
          />
        </div>

        <HomepageRecentJobViewAll />
      </div>
    </>
  );
};

export default HomepageRecentJob;
