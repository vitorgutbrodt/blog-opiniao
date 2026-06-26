import axios from "axios";

const API_SERVER = axios.create({
  baseURL: process.env.CRUDCRUD_URL,
});

export { API_SERVER };