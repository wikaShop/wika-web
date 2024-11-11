// src/api.js
import axios from "axios";

// Crear una instancia de Axios
const apiClient = axios.create({
    baseURL: 'https://api-mvw4nmcgga-uc.a.run.app', // Reemplaza con tu URL base
    headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer YOUR_API_KEY', // Reemplaza con tu clave API
    },
});

// Opcional: Puedes configurar interceptores para manejar respuestas o errores de manera global
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Puedes manejar errores globalmente aquí
    console.error("API call error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
