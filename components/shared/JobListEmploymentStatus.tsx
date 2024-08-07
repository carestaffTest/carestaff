"use client";

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { employmentStatusSelection } from "@/constant";

const JobListEmploymentStatus = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem("status");
    if (savedSearchTerm) {
      setSelectedOption(savedSearchTerm);
    }
  }, []);

  const onSelectCategory = (
    employment: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue = employment.target.value;
    setSelectedOption(newValue);
    let newUrl = "";

    if (newValue && newValue !== "All") {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "status",
        value: newValue,
      });

      localStorage.setItem("status", newValue);
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["status"],
      });

      localStorage.removeItem("status");
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <>
      <select
        value={selectedOption}
        onChange={onSelectCategory}
        className="select-field"
      >
        {employmentStatusSelection.map((status) => (
          <option key={status.key} value={status.employmentTypeValue}>
            {status.employmentType}
          </option>
        ))}
      </select>
    </>
  );
};

export default JobListEmploymentStatus;
