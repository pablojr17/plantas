import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/pablojr17/plantmanager'
});

export default api;