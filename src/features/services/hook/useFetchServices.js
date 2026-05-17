import { useQuery } from "@tanstack/react-query"
import { fetchServices } from "../api/fetchServices";
export const useFetchServices = () => {
    return useQuery({
        queryKey: ["v2/web/services"],
        queryFn: fetchServices,

    });
}