import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../api/fetchNews";

export const useFetchNews = (queryParams = "") => {
    return useQuery({
        queryKey: ["v2/news", queryParams],
        queryFn: () => fetchNews(queryParams),
        enabled: true,
    });
};