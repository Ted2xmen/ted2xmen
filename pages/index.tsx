import React from "react";
import Layout from "../layouts/layout";
import Head from "next/head";
import Info from "../components/intro/info";
import Links from "../components/contact/links";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Tugrul Erdem Dogru - Ted2xmen.dev`}</title>
        </Head>
        <Info />
        <div className="mt-sm py-2">
          <Links />
        </div>
      </Layout>
    </>
  );
};

export default Index;
