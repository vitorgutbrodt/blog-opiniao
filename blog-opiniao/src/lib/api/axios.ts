import axios from "axios";

console.log("NEXT_PUBLIC_CRUDCRUD_URL:", process.env.NEXT_PUBLIC_CRUDCRUD_URL);

const API_URL = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CRUDCRUD_URL,
});

console.log("Axios baseURL:", API_URL.defaults.baseURL);

export { API_URL };