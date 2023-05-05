import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import spotifyApi from "../../../providers/spotify";

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
  }

  componentDidMount() {
    Promise.all([
      spotifyApi.getNewReleases(),
      spotifyApi.getFeaturedPlaylists(),
      spotifyApi.getCategories(),
    ])
      .then((resp) => {
        this.setState({
          newReleases: resp[0].body.albums.items,
          playlists: resp[1].body.playlists.items,
          categories: resp[2].body.categories.items,
        });
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
