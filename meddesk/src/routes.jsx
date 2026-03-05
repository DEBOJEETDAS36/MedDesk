import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientForm from "./pages/PatientForm";
import Appointments from "./pages/Appointments";
import AppointmentForm from "./pages/AppointmentForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "patients", element: <Patients /> },
      { path: "patients/new", element: <PatientForm /> },
      { path: "appointments", element: <Appointments /> },
      { path: "appointments/new", element: <AppointmentForm /> },
    ],
  },
]);