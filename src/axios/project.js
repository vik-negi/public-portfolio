import { getUsername, isAutheticated } from "../pages/admin/utils/auth";
import { Axios } from "./axios";

export const getAdminProjects = async () => {
  const username = getUsername();
  console.log("username : ", username);
  return await Axios.get(`/api/projects/${username}`);
};
export const addProject = async (data) => {
  const { token } = isAutheticated();
  const username = getUsername();
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/formdata",
    "Access-Control-Allow-Origin": "*",
  };
  console.log("usernameu : ", username);
  return await Axios.post(`/api/projects/`, data, { headers: headers });
};

export const deleteProject = async (id) => {
  const { token } = isAutheticated();
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  return await Axios.delete(`/api/projects/${id}`, { headers: headers });
};
export const updateProject = async (data) => {
  const { token } = isAutheticated();
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  return await Axios.put(`/api/projects/${data._id}`, data, {
    headers: headers,
  });
};
