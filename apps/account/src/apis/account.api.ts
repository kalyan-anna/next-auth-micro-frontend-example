import { makeApi, Zodios } from '@zodios/core';
import axios, { InternalAxiosRequestConfig } from 'axios';
import { getPropertiesApi } from './property.schema';
import { config } from '../utils/config.helper';

const instance = axios.create({});
instance.interceptors.request.use(
  async (axiosConfig: InternalAxiosRequestConfig) => {
    axiosConfig.headers.Authorization = `Bearer 123456789`;
    axiosConfig.baseURL = config.ACCOUNT_API_BASE;
    return axiosConfig;
  }
);

export const api = makeApi([getPropertiesApi]);

export const accountApiClient = new Zodios(api, {
  sendDefaults: true,
  axiosInstance: instance,
});
