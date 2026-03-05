import { api } from "./client";

export const fetchAppointments = async () => {
  const { data } = await api.get("/appointments");
  return data;
};

export const createAppointment = async (appointment) => {
  const { data } = await api.post("/appointments", appointment);
  return data;
};