import axios from "axios";

// Apne backend ka URL daal — agar local hai to:
const API = axios.create({
  baseURL: "http://192.168.29.30:8000/", //
  headers: { "Content-Type": "application/json" },
});

export default API;
