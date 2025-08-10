import React, { useEffect, useState } from "react";
import { getAppointments, createAppointment } from "../api/appointments";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({ name: "", date: "" });

  useEffect(() => {
    loadAppointments();
  }, []);

  async function loadAppointments() {
    const data = await getAppointments();
    setAppointments(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createAppointment(form);
    setForm({ name: "", date: "" });
    loadAppointments();
  }

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((a, i) => (
          <li key={i}>
            {a.name} - {a.date}
          </li>
        ))}
      </ul>

      <h3>Book New Appointment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}
