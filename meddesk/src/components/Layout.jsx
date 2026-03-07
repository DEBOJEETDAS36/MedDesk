import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ padding: 20 }}>
      <h1>MedDesk</h1>

      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/patients">Patients</Link> |{" "}
        <Link to="/appointments">Appointments</Link>
      </nav>

      <Outlet />
    </div>
  );
}