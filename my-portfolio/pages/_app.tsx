import "../styles/globals.css";
// import "../styles/main.css";
// import "../styles/test.css";

import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

// Import Inter font from Google Fonts
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(false);
  const nextRouter = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);
    nextRouter.events.on('routeChangeStart', handleStart);
    nextRouter.events.on('routeChangeComplete', handleStop);
    nextRouter.events.on('routeChangeError', handleStop);
    return () => {
      nextRouter.events.off('routeChangeStart', handleStart);
      nextRouter.events.off('routeChangeComplete', handleStop);
      nextRouter.events.off('routeChangeError', handleStop);
    };
  }, [nextRouter.events]);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <title>Nihar Marar | Portfolio</title>
        <meta name="description" content="Full-stack developer and machine learning engineer portfolio. Explore my projects, experience, and skills in web development and machine learning." />
        <meta property="og:title" content="Nihar Marar | Portfolio" />
        <meta property="og:description" content="Explore my projects, experience, and skills in web development and machine learning." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nihar Marar | Portfolio" />
        <meta name="twitter:description" content="Explore my projects, experience, and skills in web development and machine learning." />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      <div className={inter.className}>
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 pointer-events-none">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

