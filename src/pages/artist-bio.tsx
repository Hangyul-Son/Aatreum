import React from "react";
import BioCover from "../components/bio/bio-cover";
import BioPortfolio from "../components/bio/bio-portfolio";
import BioShortIntro from "../components/bio/bio-short-intro";

import Template from "./template";
import "../styles/artist-bio.scss";

function ArtistBio() {
  return (
    <Template pageName="artist-bio">
      <BioCover />
      <BioShortIntro />
      <BioPortfolio />
    </Template>
  );
}

export default ArtistBio;
