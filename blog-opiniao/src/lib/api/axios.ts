import axios from 'axios';

console.log(process.env.CRUDCRUD_URL);

const API_URL = axios.create({
  baseURL: process.env.CRUDCRUD_URL,
});

export { API_URL };