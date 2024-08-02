import Link from "next/link";
import React from "react";

const HomepageRecentJobViewAll = () => {
  return (
    <div className="w-full text-[#0099ff] p-medium-18 flex z-10 justify-end mb-5 md:mb-14 pr-16">
      <Link href="/listofjobs">View All</Link>
    </div>
  );
};

export default HomepageRecentJobViewAll;
