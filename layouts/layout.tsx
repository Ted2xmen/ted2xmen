import Head from "next/head";
import Meta from "./meta";
import Footer from "./footer";
import Navbar from "./navbar";
import Header from "./header";
import { Fragment } from "react";
import AppContainer from "../ui/container/appContainer";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <Fragment>
      <Meta />
      <Head>
        <title>{`${title || "Tugrul Erdem Dogru"} - Ted2xmen.dev`}</title>
      </Head>
      <div className="min-h-screen max-w-3xl mt-10 md:mt-16 mx-auto">
        <Header hero="Tuğrul Erdem Dogru" subHero="Frontend Developer" />
        <Navbar />
        <AppContainer>{children}</AppContainer>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
