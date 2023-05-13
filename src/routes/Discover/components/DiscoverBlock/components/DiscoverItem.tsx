import React from "react";
import styles from "../styles/_discover-item.module.scss";

export default function DiscoverItem({
  images,
  name,
}: {
  images: { url: string }[];
  name: string;
}) {
  return (
    <div className={`${styles['discover-item']} ${styles.animate__animated} ${styles.animate__fadeIn}`}>
      <div
        className={styles['discover-item__art']}
        style={{ backgroundImage: `url(${images[0].url})` }}
      />
      <p className={styles['discover-item__title']}>{name}</p>
    </div>
  );
}
