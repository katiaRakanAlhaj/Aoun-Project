import client from "../../../api/client";
export const fetchContact = async() => {
    const response = await client.get("/v2/contact-info");
    return response.data || []; // Return empty array if no data
};