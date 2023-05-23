import React from "react";
import Layout from "../layouts/layout";
import Links from "../components/contact/links";
import me from "../public/me.jpeg";
import Image from "next/image";
import { blurData } from "../lib/functions";

const Index = () => {
  return (
    <Layout title="Tugrul Erdem Dogru - Ted2xmen.dev">
      <div className="info-container">
        <div className="w-1/2 md:w-1/1">
          <Image
            className="rounded-1"
            blurDataURL={blurData}
            placeholder="blur"
            src={me}
            alt="Tugrul"
          />
        </div>
        <div>
          <p>
            I am a self-taught frontend developer who is curious and passionate
            about learning new technologies. I am motivated to be a part of a
            team where I can improve myself and to contribute, and learn from,
            other talented colleagues on complex and interesting projects.
          </p>
        </div>
      </div>
      <div className="mt-sm ">
        <Links />
      </div>
    </Layout>
  );
};

export default Index;
