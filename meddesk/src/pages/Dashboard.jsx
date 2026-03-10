import { usePatients } from "../hooks/usePatients";

export default function Dashboard() {
  const { data } = usePatients();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Patients: {data?.length || 0}</p>
    </div>
  );
}