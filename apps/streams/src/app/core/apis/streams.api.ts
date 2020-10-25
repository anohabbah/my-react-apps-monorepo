import axios, { AxiosInstance } from 'axios';

const streamsAPI: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4300'
});

export default streamsAPI;
