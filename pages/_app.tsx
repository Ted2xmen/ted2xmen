import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../ui/loader";

import "../styles/index.css";
import "../styles/animation.css";
import "../styles/last.css";
import "../styles/code.css";
import "../styles/spinner.css";
import "../styles/loader.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Component {...pageProps} />
          <Analytics />
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      )}
    </>
  );
}
