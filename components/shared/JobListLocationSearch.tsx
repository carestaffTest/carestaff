"use client";

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";

const JobListLocationSearch = ({
  placeholder = "Search Location...",
}: {
  placeholder?: string;
}) => {
  const [location, setLocation] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem("location");
    if (savedSearchTerm) {
      setLocation(savedSearchTerm);
    }
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (location) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "location",
          value: location,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["location"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [location, searchParams, router]);

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setLocation(value);
    localStorage.setItem("location", value);
  };

  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-md bg-grey-50 px-4 py-2">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={location}
        onChange={handleInputChange}
        className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default JobListLocationSearch;
