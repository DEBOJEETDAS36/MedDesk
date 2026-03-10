import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePatient } from "../hooks/usePatients";

export default function PatientForm() {
  const navigate = useNavigate();
  const mutation = useCreatePatient();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form, {
      onSuccess: () => navigate("/patients"),
    });
  };

  return (
    <div>
      <h2>New Patient</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          onChange={(e) =>
            setForm({ ...form, firstName: e.target.value })
          }
        />
        <input
          placeholder="Last Name"
          onChange={(e) =>
            setForm({ ...form, lastName: e.target.value })
          }
        />
        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <input
          placeholder="Phone"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}