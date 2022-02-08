import axios, {AxiosError} from 'axios';
import LocalStorageService from '../services/LocalStorageService';

export const instanse = axios.create({
  baseURL: 'https://prayer.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});

instanse.interceptors.request.use(async config => {
  const token = await LocalStorageService.getToken();
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${token}`;

  return config;
}),
  (error: AxiosError) => {
    return Promise.reject(error);
  };

export const apiAuth = axios.create({
  baseURL: 'https://prayer.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
