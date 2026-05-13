import { useQuery } from "@tanstack/react-query"
import { fetchPartners } from "../api/fetchPartners";
export const useFetchPartners = () => {
    return useQuery({
        queryKey: ["v2/web/partner"],
        queryFn: fetchPartners,

    });
}