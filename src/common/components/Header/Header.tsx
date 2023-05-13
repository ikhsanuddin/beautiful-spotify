import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import hero from "@/assets/images/hero.svg";
import styles from "./_header.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <Image priority src={hero} alt={"Avatar"} height={200} />

      <div>
        <h1>Your favourite tunes</h1>
        <h2>
          All <FontAwesomeIcon icon={faSun as IconProp} /> and all{" "}
          <FontAwesomeIcon icon={faMoon as IconProp} />
        </h2>
      </div>
    </div>
  );
};

export default Header;
