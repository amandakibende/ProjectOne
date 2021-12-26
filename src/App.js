import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AllNft from "./AllNft";
import NewNft from "./NewNft";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path to="/" component={Home} />
        <Route exact path to="/all-nft" component={AllNft} />
        <Route exact path to="/new-nft" component={NewNft} />
      </Switch>
    </div>
  );
}
