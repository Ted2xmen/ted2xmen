import React from "react";
import Layout from "../layouts/layout";

const About = () => {
  return (
    <Layout title="About">
      <div className="info-text space-y-6 px-2 mt-8 md:px-12">
        <p className="mt-2">
          I mostly use <span className="text-slate-300">Next.js</span> for my
          web development projects. For styling, I use various libraries, but I
          tend to rely on Styled Components,
          <span className="text-purple-700"> Tailwind</span>, and Ant Design. I
          enjoy using <span className="text-blue-600">TypeScript</span> for type
          safety and better code organization.
        </p>
      </div>
    </Layout>
  );
};

export default About;
