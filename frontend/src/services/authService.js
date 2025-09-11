import api from "./api";

export const loginUser = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  return data;
};

export const registerUser = async (user) => {
  const { data } = await api.post("/auth/register", user);
  return data;
};