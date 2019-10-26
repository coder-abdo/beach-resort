import React from "react";
import "./App.css";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import SingleRoom from "./pages/singleRoom";
import Error from "./pages/error";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
