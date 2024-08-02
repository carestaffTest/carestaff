"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { formUrlQuery } from "@/lib/utils";
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  page: number | string;
  totalPages: number;
  urlParamName?: string;
};

const Pagination = ({ page, totalPages, urlParamName }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(page);

  const onClick = (pageValue: number) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || "page",
      value: pageValue.toString(),
    });

    router.push(newUrl, { scroll: false });
  };

  const isPrevDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  const renderPageNumbers = () => {
    let pages = [];
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    pages.push(
      <PaginationItem key={1}>
        <PaginationLink
          href="#"
          className={`px-4 py-2 ${
            currentPage === 1 ? "bg-orange-500" : "hover:bg-orange-200"
          }`}
          onClick={() => onClick(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    if (startPage > 2) {
      pages.push(
        <PaginationItem key="start-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            className={`px-4 py-2 ${
              currentPage === i ? "bg-orange-500" : "hover:bg-orange-200"
            }`}
            onClick={() => onClick(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (endPage < totalPages - 1) {
      pages.push(
        <PaginationItem key="end-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    if (totalPages > 1) {
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            className={`px-4 py-2 ${
              currentPage === totalPages
                ? "bg-orange-500"
                : "hover:bg-orange-200"
            }`}
            onClick={() => onClick(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <div className="flex-center mt-5 p-5 p-regular-12 bg-[#53D1D1] text-white rounded-xl">
      <ShadcnPagination>
        <PaginationContent className="flex gap-2">
          <PaginationItem>
            <button
              onClick={() => onClick(currentPage - 1)}
              disabled={isPrevDisabled}
              className={`px-4 py-2 ${
                isPrevDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-orange-200"
              }`}
            >
              <ChevronLeft />
            </button>
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <button
              onClick={() => onClick(currentPage + 1)}
              disabled={isNextDisabled}
              className={`px-4 py-2 ${
                isNextDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-orange-200"
              }`}
            >
              <ChevronRight />
            </button>
          </PaginationItem>
        </PaginationContent>
      </ShadcnPagination>
    </div>
  );
};

export default Pagination;
