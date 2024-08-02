import Homepage from "@/components/shared/Homepage";
import { getAllJobs } from "@/lib/actions/jobs.actions";
import { SearchParamProps } from "@/types";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const jobsData = await getAllJobs({
    query: searchText,
    page,
    limit: 3,
  });

  return (
    <>
      <Homepage jobsData={jobsData} />
    </>
  );
}
