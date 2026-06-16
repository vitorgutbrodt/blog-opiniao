import axios from "axios";

export const API_SERVER = axios.create({
  baseURL: process.env.CRUDCRUD_URL,
});