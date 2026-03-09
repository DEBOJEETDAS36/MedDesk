import { Link } from "react-router-dom";
import { usePatients, useDeletePatient } from "../hooks/usePatients";

export default function Patients() {
  const { data, isLoading } = usePatients();
  const deleteMutation = useDeletePatient();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Patients</h2>
      <Link to="/patients/new">Add Patient</Link>

      <ul>
        {data.map((patient) => (
          <li key={patient.id}>
            {patient.firstName} {patient.lastName}
            <button onClick={() => deleteMutation.mutate(patient.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}