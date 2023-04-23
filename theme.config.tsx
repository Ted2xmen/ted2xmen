import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Lastfm from "./components/lastfm";
import styles from "./components/footer.module.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const logo = (
  <div className="mt-8">
    <h1 className="cursor-pointer text-center -translate-y-4 p-2 font-black text-zinc-50 text-2xl">
      Ted2xmen.dev
    </h1>
  </div>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/Ted2xmen/ted2xmen",
  },
  docsRepositoryBase: "https://github.com/Ted2xmen/ted2xmen",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "Home – Tugrul",
      };
    }

    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Tugrul",
      };
    }
  },
  logo,
  logoLink: "/",
  search: {
    placeholder: "Search",
  },

  // navbar: {
  //   extraContent: <div>
  //     {jobTitle[2]}
  //   </div>
  // },

  toc: {
    float: true,
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://nextra.site/og.jpeg"
        : `https://nextra.site/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <script src="https://cdn.tailwindcss.com"></script>
        <meta
          name="description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta
          name="og:description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + " – Ted2xmen" : "Ted2xmen"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Ted2xmen" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-KEKR2Z8PLL`}
        />

        <Script strategy="lazyOnload" id="ga-script">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KEKR2Z8PLL', {
              page_path: window.location.pathname,
            });
        `}
        </Script>
      </>
    );
  },
  darkMode: false,
  // primaryHue: 110,
  primaryHue: { dark: 110, light: 132 },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
  },
  footer: {
    text: (
      <div className={styles.flexFooter}>
        {/* ted2xmen.dev - Tuğrul Erdem Dogru */}
        <Analytics />
        <Lastfm />
      </div>
    ),
  },
};

export default config;
