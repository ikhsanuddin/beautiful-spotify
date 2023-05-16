import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import styles from "./_header.module.scss"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import Image from "next/image"
import hero from "@/assets/images/hero.svg"
import logoSpotify from "@/assets/images/Spotify_Logo_RGB_Green.png"

const Header = () => {
  return (
    <div className={styles.header}>
      <Image priority src={hero} alt={"Avatar"} height={180} />
      <div className={styles['spotify-power']}>
        <p>Powered by</p>
        <Image
          style={{ marginBottom: 25 }}
          src={logoSpotify}
          height={70}
          alt="Spotify logo"
        />
      </div>

      <div className={styles['header-subtitle']}>
        <h1>Your favourite tunes</h1>
        <h2>
          All <FontAwesomeIcon icon={faSun as IconProp} /> and all{" "}
          <FontAwesomeIcon icon={faMoon as IconProp} />
        </h2>
      </div>
    </div>
  )
}

export default Header
