
import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/SessionForms/LoginFormPage";
import SignupFormPage from "./components/SessionForms/SignupFormPage";
import Navigation from "./components/Navigation";
import Modal from "./components/Modal";

function App() {

  return (
    <>
    <Modal />
    <Navigation />
    </>
  );
  
}

export default App;

