import axios from "axios";

// Change this later to your Azure URL after deployment
const API_BASE = "https://bridgetou-backend-func.azurewebsites.net/api";

export async function getAppointments() {
  const res = await axios.get(`${API_BASE}/AppointmentFunction`);
  return res.data;
}

export async function createAppointment(appointment) {
  const res = await axios.post(`${API_BASE}/AppointmentFunction`, appointment);
  return res.data;
}
