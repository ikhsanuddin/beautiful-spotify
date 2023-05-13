import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import DiscoverItem from "./DiscoverItem";
import styles from "../styles/_discover-block.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function scrollContainer(id: string, option: { isNegative?: boolean } = {}) {
  return () => {
    const scrollableContainer = document.getElementById(id);
    if (scrollableContainer) {
      const amount = option.isNegative
        ? -scrollableContainer?.offsetWidth
        : scrollableContainer?.offsetWidth;

      scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
    }
  };
}

export default function DiscoverBlock({
  text,
  id,
  data,
  imagesKey = "images",
}: {
  text: string;
  id: string;
  data: any;
  imagesKey?: string;
}) {
  return (
    <div className={styles["discover-block"]}>
      <div className={styles["discover-block__header"]}>
        <h2>{text}</h2>
        <span />
        {data.length ? (
          <div
            className={`${styles.animate__animated} ${styles.animate__fadeIn}`}
          >
            <FontAwesomeIcon
              icon={faChevronLeft as IconProp}
              onClick={scrollContainer(id, { isNegative: true })}
            />
            <FontAwesomeIcon
              icon={faChevronRight as IconProp}
              onClick={scrollContainer(id)}
            />
          </div>
        ) : null}
      </div>
      <div className={styles["discover-block__row"]} id={id}>
        {data.map(({ [imagesKey]: images, name }: any) => (
          <DiscoverItem key={name} images={images} name={name} />
        ))}
      </div>
    </div>
  );
}
