
import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./components/Modal";
import PlayBar from "./components/PlayBar";
import Navigation from "./components/Navigation";
import AlbumsIndex from "./components/Albums/AlbumsIndex";
import AlbumShow from "./components/Albums/AlbumShow";

function App() {

  return (
    <>
    <div className="page-container">
      <Modal />
      <div className="nav-container">
      < Navigation />
      </div>

      <div className="playbar-container">
        <PlayBar />
        <Switch>
          <Route exact path="/albums">
            <AlbumsIndex />
          </Route>
          <Route exact path="/albums/:albumId">
            <AlbumShow />
          </Route>
    
        </Switch>
      </div>
    </div>
    </>
  );
  
}

export default App;

