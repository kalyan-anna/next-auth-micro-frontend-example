import {
  signIn as nextauthSignin,
  signOut as nextauthSignout,
  getSession as nextauthGetSession,
} from 'next-auth/react';

const signIn = () => {
  nextauthSignin('auth0', {
    callbackUrl: '/account',
  });
};

const signOut = () => {
  nextauthSignout({
    callbackUrl: '/',
    redirect: true,
  });
};

const acquireToken = async () => {
  const session: any = await nextauthGetSession();
  return session?.accessToken;
};

export const authService = {
  signIn,
  signOut,
  acquireToken,
};
