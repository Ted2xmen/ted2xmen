import React from "react";
import styles from "./icons.module.css";
import SocialCard from "./socialCard";
import { socialLinks } from "../cms";

const Icons = () => {
  return (
    <div className={styles.flexContainer}>
      {socialLinks.map((link) => {
        return (
          <SocialCard name={link.name} icon={link.icon} href={link.href} />
        );
      })}
    </div>
  );
};

export default Icons;
