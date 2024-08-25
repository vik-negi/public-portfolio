import { getToken, getUsername } from "../pages/admin/utils/auth";
import { Axios } from "./axios";

export const getAdminExperience = async () => {
  const username = getUsername();
  console.log("username : ", username);
  return await Axios.get(`/api/experience/${username}`);
};

export const addExperience = async (data) => {
  const token = getToken();
  return await Axios.post(`/api/experience/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      contentType: "application/json",
    },
  });
};
