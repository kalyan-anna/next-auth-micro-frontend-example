import getConfig from 'next/config';

const nextConfig = getConfig();

const EST_API_BASE = nextConfig?.publicRuntimeConfig.EST_API_BASE;

export const config = {
  EST_API_BASE,
};
