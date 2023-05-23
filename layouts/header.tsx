import React from "react";

const Header = ({ hero, subHero }) => {
  return (
    <section className="headers">
      <h1 className="hero-title header-1 py-1">{hero}</h1>
      <h3 className="hero-subtitle header-2">{subHero}</h3>
      <div className="loadingspinner mt-4">
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div>
    </section>
  );
};

export default Header;
