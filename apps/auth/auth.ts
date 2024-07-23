import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      issuer: process.env.AUTH_CLIENT_ISSUER,
      authorization: {
        params: {
          scope: process.env.AUTH_SCOPES,
          audience: process.env.AUTH_AUDIENCE,
        },
      },
      redirectProxyUrl: 'http://localhost:8080/auth/api/auth',
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      (session as any).accessToken = token.accessToken;
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log('url:', url, ' baseurl:', baseUrl);

      let microFEBaseUrl = baseUrl;
      if (microFEBaseUrl.includes('8083')) {
        microFEBaseUrl = 'http://localhost:8080';
      }

      // Allows relative callback URLs
      if (url.startsWith('/')) return `${microFEBaseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === microFEBaseUrl) return url;
      return microFEBaseUrl;
    },
  },
  debug: true,
});
