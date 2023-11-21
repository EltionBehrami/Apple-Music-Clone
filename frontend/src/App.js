
import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./components/Modal";
import PlayBar from "./components/PlayBar";
import Navigation from "./components/Navigation";
import AlbumsIndex from "./components/Albums/AlbumsIndex";
import AlbumShow from "./components/Albums/AlbumShow";
import PlaylistsIndex from "./components/Playlists";
import PlaylistShow from "./components/Playlists/PlaylistShow";
import SongsIndex from "./components/Songs/SongsIndex";

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
        {/* <Switch> */}
          <Route exact path="/albums">
            <AlbumsIndex />
          </Route>
          <Route exact path="/playlists">
            <PlaylistsIndex />
          </Route>
          <Route exact path="/songs">
            <SongsIndex />
          </Route>
          <Route exact path="/albums/:albumId">
            <AlbumShow />
          </Route>
          <Route exact path="/playlists/:playlistId">
            <PlaylistShow />
          </Route>
        {/* </Switch> */}
      </div>
    </div>
    </>
  );
  
}

export default App;

