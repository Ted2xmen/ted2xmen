import React from "react";
import styles from "./home.module.css";
import Icons from "./icons";
import { heroText, jobText, jobTitle, lookingForAjob } from "../cms";
import Badges from "./badges";
import Lastfm from "./lastfm";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.heroWrapper}>
        <div className={styles.hero}>{heroText}</div>
        <Badges />
        <h4 className={styles.title}> {jobTitle} </h4>
        <div className={styles.wrapper}>
          {!lookingForAjob ? (
            <p className={styles.paragraph}>{jobText[1]}</p>
          ) : (
            <p className={styles.paragraph}>{jobText[0]}</p>
          )}
        </div>
        <div className={styles.social}>
          <Icons />
          {/* <Lastfm /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
