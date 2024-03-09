import axios from "axios";
export const url = "http://192.168.1.143:3001";
// kiểm tra github
export const CheckLogin = async (body) => {
    try {
        const response = await axios.post(url + "/users/post-login", body);
        console.log("Data login:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching login data:", error);
    }
};
export const CheckToken = async (token) => {
    try {
        const response = await axios.post(url + "/users/check-token", { token });
        console.log("Data token:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching token data:", error);
    }
};