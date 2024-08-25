import { getUsername } from "../pages/admin/utils/auth";
import { Axios } from "./axios";
import axios from "axios";

export const dashboard = async () => {
  return await Axios.get("/api/users");
};

export const publicInfo = async (username) => {
  return await Axios.get(`/api/user/public-info/${username}`);
};

export const getAbout = async (username) => {
  return await Axios.get(`/api/about/${username}`);
};
export const getExperience = async (username) => {
  return await Axios.get(`/api/experience/${username}`);
};
export const getProjects = async (username) => {
  return await Axios.get(`/api/projects/${username}`);
};
