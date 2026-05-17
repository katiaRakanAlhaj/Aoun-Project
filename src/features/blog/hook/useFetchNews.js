import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../api/fetchNews";

export const useFetchNews = (queryParams = "", page = 1) => {
    return useQuery({
        queryKey: ["v2/news", queryParams, page],
        queryFn: () => fetchNews(queryParams, page),
        enabled: true,
        keepPreviousData: true, // This helps with smooth pagination
    });
};