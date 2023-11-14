
import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./components/Modal";
import PlayBar from "./components/PlayBar";
import Navigation from "./components/Navigation";
import AlbumsIndex from "./components/Albums/AlbumsIndex";

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
        <AlbumsIndex />
      </div>
    </div>
    </>
  );
  
}

export default App;

