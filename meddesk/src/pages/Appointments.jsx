import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAppointments } from "../api/appointments";

export default function Appointments() {
  const { data, isLoading } = useQuery({
    queryKey: ["appointments"],
    queryFn: fetchAppointments,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Appointments</h2>
      <Link to="/appointments/new">Add Appointment</Link>

      <ul>
        {data.map((appt) => (
          <li key={appt.id}>
            Patient ID: {appt.patientId} — {appt.date}
          </li>
        ))}
      </ul>
    </div>
  );
}