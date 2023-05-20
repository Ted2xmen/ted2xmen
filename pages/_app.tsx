import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/animation.css";
import "../styles/last.css";
import "../styles/code.css";
// import "../styles/components.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
