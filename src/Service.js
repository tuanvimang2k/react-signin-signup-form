import axios from "axios";
import { CheckLogin,CheckToken } from "./Helper";
export const HandleSignIn = async (username,password) => {
    const _body = {
        email: username,
        password: password,
    };
    try {
        const loginResponse = await CheckLogin(_body);
        console.log("Login response:", loginResponse.status);
        if (loginResponse.status === 1) {
            // Đăng nhập thành công, kiểm tra token
            const tokenResponse = await CheckToken(loginResponse.token);
            console.log("Token response:", tokenResponse);
            
            // Kiểm tra tokenResponse và thực hiện các bước cần thiết
            if (tokenResponse && tokenResponse.success === true) {
                // Token hợp lệ, chuyển hướng đến "/my-chart"
                // navigate("/my-chart");
                return true;
            } else {
                // Token không hợp lệ hoặc có lỗi khác, xử lý theo nhu cầu của bạn
                console.error("Invalid token or other error:", tokenResponse);
            }
        } else {
            // Đăng nhập không thành công, xử lý theo nhu cầu của bạn
            console.error("Login unsuccessful:", loginResponse);
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
};
