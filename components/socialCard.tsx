import React from "react";
import styles from "./socialCard.module.css";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const SocialCard = ({ href, icon, name }) => {
  return (
    <div className={styles.button}>
      <a className={styles.noUnderline} target="_blank" href={href}>
        {icon === "FaGithub" ? (
          <FaGithub />
        ) : icon === "FaLinkedin" ? (
          <FaLinkedin />
        ) : (
          <FaMedium />
        )}
        {name}
      </a>
    </div>
  );
};

export default SocialCard;
