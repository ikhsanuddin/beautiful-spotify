import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch,
  faStream,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "@/assets/images/avatar.svg";
import styles from "./_sidebar.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useSession } from "next-auth/react";
import Image from "next/image";

function renderSideBarOption(
  _link: string,
  icon: IconProp,
  text: string | any,
  options?: { selected: boolean }
) {
  return (
    <div
      className={`${styles.sidebar__option} ${
        options?.selected ? styles["sidebar__option--selected"] : ""
      }`}
    >
      <FontAwesomeIcon icon={icon as IconProp} />
      <p>{text}</p>
    </div>
  );
}

const SideBar = () => {
  const { data } = useSession();
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__profile}>
        <Image
          priority
          src={avatar}
          alt={"Avatar"}
          height={70}
          width={70}
          style={{ width: "30%" }}
        />

        <p>{data?.username}</p>
      </div>
      <div className={styles.sidebar__options}>
        {renderSideBarOption("/", faHeadphonesAlt as IconProp, "Discover", {
          selected: true,
        })}
        {renderSideBarOption("/search", faSearch as IconProp, "Search")}
        {renderSideBarOption("/favourites", faHeart as IconProp, "Favourites")}
        {renderSideBarOption(
          "/playlists",
          faPlayCircle as IconProp,
          "Playlists"
        )}
        {renderSideBarOption("/charts", faStream as IconProp, "Charts")}
      </div>
    </div>
  );
};

export default SideBar;
