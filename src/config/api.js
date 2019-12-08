import { create } from 'apisauce';

const api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000
});

export default api;
