import '@/styles/globals.scss';
import Head from 'next/head';

// fonts
import { Nunito, Pacifico } from '@next/font/google';
const nunito = Nunito({ subsets: ['latin'] });
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
});

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />

        <title>Bzy • Your new business card</title>
        <meta
          name="description"
          content="The digital business card platform focused on building community. Whether you're an individual or hosting an event, Bzy is the answer."
        />
        <meta property="og:title" content="Bzy • Your new business card" />
        <meta
          property="og:description"
          content="The digital business card platform focused on building community. Whether you're an individual or hosting an event, Bzy is the answer."
        />

        <meta property="og:image" content="https://www.bzy.so/og.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bzy" />
        <meta property="og:url" content="https://bzy.so" />
        <meta name="twitter:image:alt" content="Bzy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@letsgetbzy" />
        <meta name="twitter:creator" content="@letsgetbzy" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <style jsx global>{`
        :root {
          --nunito: ${nunito.style.fontFamily};
          --pacifico: ${pacifico.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default App;
