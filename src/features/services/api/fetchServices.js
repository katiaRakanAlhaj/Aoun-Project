import client from "../../../api/client";
export const fetchServices = async() => {
    const response = await client.get("v2/web/services");
    return response.data || []; // Return empty array if no data
};