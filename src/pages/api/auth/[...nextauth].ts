/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  pages: {
    signIn: '/sign-in',
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Sign-in',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const data = await (
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          })
        ).json();

        if (data.message) {
          throw new Error(data.message);
        }

        if (data.user) {
          return { ...data.user, jwt: data.jwt };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      return { ...token, ...user };
    },
    session({ session, token }): any {
      return {
        ...session,
        user: { ...token },
      };
    },
  },
});
