import { getUsername, getToken } from "../pages/admin/utils/auth";
import { Axios } from "./axios";

export const getAdminAbout = async () => {
  const username = getUsername();
  console.log("username : ", username);
  return await Axios.get(`/api/about/${username}`);
};

export const updateAbout = async (data) => {
  const token = getToken();

  console.log("data about : ", token);
  const dataApi = await Axios.put(`/api/about/${data._id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      contentType: "application/json",
    },
  });
  console.log("data after api ", dataApi);
  return data;
};

export const createAbout = async (data) => {
  const token = getToken();

  console.log("data about : ", token);
  const dataApi = await Axios.post(`/api/about/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      contentType: "application/json",
    },
  });
  console.log("data after api ", dataApi);
  return data;
};
