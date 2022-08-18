import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import { Routes, Route } from "react-router-dom";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";
import NotFound from "./NotFound";

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <ContentWrapper />
        <Routes>
          <Route path="/" exact={true} elememt={<ContentWrapper/>} />
          <Route path="/GenresInDb" exact={true} elememt={<GenresInDb />} />
          <Route path="/LastMovieInDb" exact={true} elememt={<LastMovieInDb />} />
          <Route path="/ContentRowMovies" exact={true} elememt={<ContentRowMovies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
