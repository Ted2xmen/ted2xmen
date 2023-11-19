import React from "react";
import { useRouter } from "next/router";
import Last from "../components/footer/last";
import Code from "../components/elements/code";
import Links from "../components/contact/links";

const Footer = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className="flex flex-col items-center py-4">
      {currentRoute !== "/" && <Links />}
      {/* <Last /> */}
      {/* <Code /> */}
    </div>
  );
};

export default Footer;
