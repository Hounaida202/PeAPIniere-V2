// src/api/axios.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8000/api', // adapte à ton cas si nécessaire
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
