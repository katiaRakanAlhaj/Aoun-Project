import client from "../../../api/client";
export const fetchPartners = async() => {
    const response = await client.get("/v2/web/partner");
    return response.data || []; // Return empty array if no data
};