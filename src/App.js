import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile.jsx";

function App() {
  return (
    <div className="bg-purple-300 p-4 h-full">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
