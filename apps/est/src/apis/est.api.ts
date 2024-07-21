import { makeApi, Zodios } from '@zodios/core';
import axios, { InternalAxiosRequestConfig } from 'axios';
import { getPropertyApi } from './property.schema';
import { config } from '../utils/config.helper';
import { authService } from '@stratapro/auth-lib';

const instance = axios.create({});
instance.interceptors.request.use(
  async (axiosConfig: InternalAxiosRequestConfig) => {
    const accessToken = await authService.acquireToken();
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
    axiosConfig.baseURL = config.EST_API_BASE;
    return axiosConfig;
  }
);

export const api = makeApi([getPropertyApi]);

export const estApiClient = new Zodios(api, {
  sendDefaults: true,
  axiosInstance: instance,
});
