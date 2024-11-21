// api.ts
import axios from "axios";

export const InstanceApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/", // Cambia al endpoint adecuado
  timeout: 1000, // Opcional: tiempo máximo para la solicitud
  headers: {
    "Content-Type": "application/json",
  },
});