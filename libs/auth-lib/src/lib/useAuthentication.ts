import { useSession } from 'next-auth/react';

export const useAuthentication = () => {
  const session = useSession();

  return {
    isBusy: session?.status === 'loading',
    isAuthenticated: session?.status === 'authenticated',
    session,
  };
};
