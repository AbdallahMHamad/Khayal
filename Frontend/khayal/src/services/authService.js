import { axiosInstance } from "../api/axios";

export async function sendOTP(email) {
  return axiosInstance.post("/user/send-otp", { email });
}

export async function verifyOTP(email, otp) {
  return axiosInstance.post("/user/verify-otp", { email, otp });
}

export async function registerUser(name, email, password) {
  return axiosInstance.post("/user/register", { name, email, password });
}
export async function resetPassword(email, newPassword) {
  return axiosInstance.post("/user/reset-password", { email, newPassword });
}
