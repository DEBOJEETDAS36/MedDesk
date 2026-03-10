import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAppointment } from "../api/appointments";

export default function AppointmentForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries(["appointments"]);
      navigate("/appointments");
    },
  });

  const [form, setForm] = useState({
    patientId: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <div>
      <h2>New Appointment</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Patient ID"
          onChange={(e) =>
            setForm({ ...form, patientId: e.target.value })
          }
        />
        <input
          type="datetime-local"
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}