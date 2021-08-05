import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Ripple, Messages, Animals, Ombre } from "./components";
import Journal from "./components/Journal";
import Audio from "./components/Audio";
import Scroll from "./components/Scroll";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/ripple" exact component={() => <Ripple />} />
          <Route path="/messages" exact component={() => <Messages />} />
          <Route path="/animals" exact component={() => <Animals />} />
          <Route path="/scroll" exact component={() => <Scroll />} />
          <Route path="/ombre" exact component={() => <Ombre />} />
          <Route path="/journal" exact component={() => <Journal />} />
          <Route path="/audio" exact component={() => <Audio />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
