import React from "react"
import styles from "../styles/_discover-item.module.scss"
import Link from "next/link"

export default function DiscoverItem({
  images,
  name,
  owner,
  external_urls: { spotify: hrefLink = "#" },
}: {
  images: { url: string }[]
  name: string
  external_urls: { spotify: string }
  owner?: {
    display_name?: string
    name?: string
    external_urls: { spotify: string }
  }
}) {
  return (
    <div
      className={`${styles["discover-item"]} ${styles.animate__animated} ${styles.animate__fadeIn}`}
    >
      <Link href={hrefLink} target="_blank" rel="nofollow noindex">
        <div
          className={styles["discover-item__art"]}
          style={{ backgroundImage: `url(${images[0].url})` }}
        />
        <p className={styles["discover-item__title"]}>{name}</p>
      </Link>
      {owner && (
        <Link
          className={styles["discover-item__subtitle"]}
          href={owner.external_urls.spotify}
          target="_blank"
          rel="nofollow noindex"
        >
          {owner.display_name ? `by ${owner.display_name}` : owner.name}
        </Link>
      )}
    </div>
  )
}
