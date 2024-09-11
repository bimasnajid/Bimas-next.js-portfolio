// pages/_app.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app"; // Import AppProps
import Loading from "@/components/Loading"; // Adjust the import based on your folder structure
import "@/styles/globals.css"; // Your global styles
import { kMaxLength } from "buffer";
// import NProgress from "nprogress";
// import "nprogress/styles/nprogress.css"; // Import CSS untuk bar loading

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show the loading screen when the route change starts
      const handleStart = () => setLoading(true);
      const handleComplete = () => setLoading(false);

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);

      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      };
    }, [router]);

  return (
    <>
      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;


