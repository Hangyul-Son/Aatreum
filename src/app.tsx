import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.scss";

import ArtistBio from "./pages/artist-bio";
import Landing from "./pages/landing";
import Funding from "./pages/funding";
import PageNotFound from "./pages/page-not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/bio/:artist" element={<ArtistBio />} />
      <Route path="/fund/:artist/:item" element={<Funding />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
