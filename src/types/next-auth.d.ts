/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      name: string;
      email: string;
      lastname: string;
      photo: string | null;
      username: string;
      jwt: string;
      iat: number;
      exp: number;
      jti: string;
    };
  }
}
