import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

export async function protectedRoutes(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    context.res.setHeader(
      'Location',
      `/sign-in?callbackUrl=${context.resolvedUrl}`,
    );

    context.res.statusCode = 302;
  }

  return session;
}
