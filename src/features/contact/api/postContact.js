import client from "../../../api/client";
export const ContactUs = async(data) => {
    const response = await client.post(`/v2/web/contact`, data);
    return response;
};