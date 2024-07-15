import getConfig from 'next/config';

const nextConfig = getConfig();

const ACCOUNT_API_BASE = nextConfig?.publicRuntimeConfig.ACCOUNT_API_BASE;

export const config = {
  ACCOUNT_API_BASE,
};
