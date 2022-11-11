import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import { CartProvider } from 'hooks/useCart/useCart';
import { FavoriteProvider } from 'hooks/useFavorite/useFavorite';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import SEO from '../../next-seo.config';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ dehydratedState: unknown; session: Session }>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <FavoriteProvider>
            <CartProvider>
              <ThemeProvider theme={theme}>
                <Head>
                  <title>Evolution Games</title>
                  <link rel="shortcut icon" href="/img/icon-512.png" />
                  <link rel="apple-touch-icon" href="/img/icon-512.png" />
                  <link rel="manifest" href="/manifest.json" />
                  <meta name="robots" content="noindex" />
                  <meta name="theme-color" content="#04040C" />
                  <meta
                    name="description"
                    content="A melhor loja de jogos do mundo"
                  />
                </Head>
                <DefaultSeo {...SEO} />
                <GlobalStyles />
                <Component {...pageProps} />
              </ThemeProvider>
            </CartProvider>
          </FavoriteProvider>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default App;
