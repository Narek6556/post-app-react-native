import axios from 'axios';
import {StorageManager} from '../StorageManager';
import {store} from '../../store/store';

const baseURL = 'http://212.42.212.29:3001';

export const publicApi = axios.create({
  baseURL,
});

export const privateApi = axios.create({
  baseURL,
});

privateApi.interceptors.request.use(
  async config => {
    const token = store.getState().auth.login.data;
    console.log(config);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);
