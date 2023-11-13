
import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./components/Modal";
import PlayBar from "./components/PlayBar";
import Navigation from "./components/Navigation";

function App() {

  return (
    <>
      <Modal />
      {/* <Navigation /> */}
      <PlayBar />
    </>
  );
  
}

export default App;

