import React, { Component, useState, useEffect } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import styles from "../styles/_discover.module.scss";
import useSpotify from "@/hooks/useSpotify";

const Discover = () => {
  const [newReleases, setnewReleases] = useState<any[]>([]);
  const [playlists, setplaylists] = useState<any[]>([]);
  const [categories, setcategories] = useState<any[]>([]);
  const spotifyApi = useSpotify();

  useEffect(() => {
    Promise.all([
      spotifyApi.getNewReleases(),
      spotifyApi.getFeaturedPlaylists(),
      spotifyApi.getCategories(),
    ])
      .then((resp) => {
        setnewReleases(resp[0].body.albums.items);
        setplaylists(resp[1].body.playlists.items);
        setcategories(resp[2].body.categories.items);
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  }, []);

  return (
    <div className={styles.discover}>
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  );
};

export default Discover;
