import Homepage from "@/components/shared/Homepage";
import { getAllJobs, getRecomendedJobs } from "@/lib/actions/jobs.actions";
import { SearchParamProps } from "@/types";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const jobsData = await getRecomendedJobs({
    query: "Recommended",
    page: 1,
    limit: 3,
  });

  return (
    <>
      <Homepage jobsData={jobsData} />
    </>
  );
}
