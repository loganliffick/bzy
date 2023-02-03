import '@/styles/globals.scss';
import Head from 'next/head';

// fonts
import { Lato, Newsreader } from '@next/font/google';
const lato = Lato({ subsets: ['latin'], weight: ['400'] });
const newsreader = Newsreader({ subsets: ['latin'] });

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />

        <meta
          property="og:image"
          content="https://www.loganliffick.com/og.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Logan Liffick" />
        <meta property="og:url" content="https://loganliffick.com" />
        <meta name="twitter:image:alt" content="© logan liffick" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@logan_liffick" />
        <meta name="twitter:creator" content="@logan_liffick" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <style jsx global>{`
        :root {
          --lato: ${lato.style.fontFamily};
          --newsreader: ${newsreader.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />;
    </>
  );
};

export default App;
