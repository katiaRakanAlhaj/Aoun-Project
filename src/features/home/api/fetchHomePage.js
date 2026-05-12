import client from "../../../api/client";
export const fetchHomePage = async() => {
    const response = await client.get("/v2/web/homePage");
    return response.data || []; // Return empty array if no data
};