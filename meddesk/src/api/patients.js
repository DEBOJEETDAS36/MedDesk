import { api } from "./client";

export const fetchPatients = async () => {
  const { data } = await api.get("/patients");
  return data;
};

export const createPatient = async (patient) => {
  const { data } = await api.post("/patients", patient);
  return data;
};

export const deletePatient = async (id) => {
  await api.delete(`/patients/${id}`);
};