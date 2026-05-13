import { fetchSingleNew } from "../api/fetchSingleNew";
import { useQuery } from "@tanstack/react-query"

export const useFetchSingleNew = (id) => {
    return useQuery({
        queryKey: ["get-news-by-id", id], // Include id in queryKey for proper caching
        queryFn: () => fetchSingleNew(id),
    });
};