import { getUsername } from "../pages/admin/utils/auth";
import { Axios } from "./axios";

export const signin = async (data) => {
  return await Axios.post("/auth/signin", data);
};

export const signup = async (data) => {
  console.log("signup data : ", data);
  return await Axios.post("/auth/signup", data);
};

export const currentUser = async () => {
  const username = getUsername();
  return await Axios.get(`/api/user/${username}`);
};
