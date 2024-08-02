"use client";

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { employmentTypeSelection } from "@/constant";

const JobListEmploymentTypeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedOption, setSelectedOption] = useState("All");

  const onSelectCategory = (
    employment: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue = employment.target.value;
    setSelectedOption(newValue);
    let newUrl = "";

    if (newValue && newValue !== "All") {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "employment",
        value: newValue,
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["employment"],
      });
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
        {employmentTypeSelection.map((employment) => (
          <option key={employment.key} value={employment.employmentTypeValue}>
            {employment.employmentType}
          </option>
        ))}
      </select>
    </>
  );
};

export default JobListEmploymentTypeFilter;
