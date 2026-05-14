import client from "../../../api/client";
export const fetchAboutUs = async() => {
    const response = await client.get("/v2/about-us");
    return response.data || []; // Return empty array if no data
};