import React from "react";
import Links from "../contact/links";
import Last from "../footer/last";
import Code from "../elements/code";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className="flex flex-col items-center py-4">
      {currentRoute !== "/" && <Links />}
      {false && (
        <img
          className="rounded-1 mb-6"
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="me"
          width={120}
        />
      )}
      <Last />
      <Code />
    </div>
  );
};

export default Footer;
