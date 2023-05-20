import React from "react";
import Layout from "../layouts/layout";
import CardWrapper from "../components/elements/cardWrapper";

const About = () => {
  return (
    <Layout>
      <div className="info-text space-y-6 px-2 mt-8 md:px-12">
        <p className="mt-2">
          I mostly use <span className="text-slate-300">Next.js</span> for my
          web development projects. For styling, I use various libraries, but I
          tend to rely on Styled Components,
          <span className="text-purple-700"> Tailwind</span>, and Ant Design. I
          enjoy using <span className="text-blue-600">TypeScript</span> for type
          safety and better code organization.
        </p>
        <p className="mt-2">
          As for content management systems, I have worked with Strapi and
          Contentful before. I also have experience with
          <span className="text-yellow-600"> Firebase</span> and React Native
          for mobile app development.
        </p>

        <p className="mt-2">
          In the future, I am interested in learning
          <span className="text-sky-500"> Python</span> for its versatility and
          use in various fields.
        </p>
        <p>...soon 🚧</p>
      </div>
    </Layout>
  );
};

export default About;
