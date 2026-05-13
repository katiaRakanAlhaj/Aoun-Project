import client from "../../../api/client";
export const fetchCategories = async() => {
    const response = await client.get("/v2/category");
    return response.data || []; // Return empty array if no data
};