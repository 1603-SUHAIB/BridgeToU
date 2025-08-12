import axios from "axios";

const API_BASE = "https://bridgetou-backend-func.azurewebsites.net/api/appointments";

export async function getAppointments() {
  const res = await axios.get(API_BASE);
  return res.data;
}

export async function createAppointment(appointment) {
  const res = await axios.post(API_BASE, appointment);
  return res.data;
}
