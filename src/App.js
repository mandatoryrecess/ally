import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Ripple, Messages, Animals, Dots, Ombre, Rain } from "./components";
import Journal from "./components/Journal";
import Audio from "./components/Audio"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/ripple" exact component={() => <Ripple />} />
          <Route path="/messages" exact component={() => <Messages />} />
          <Route path="/animals" exact component={() => <Animals />} />
          <Route path="/dots" exact component={() => <Dots />} />
          <Route path="/ombre" exact component={() => <Ombre />} />
          <Route path="/journal" exact component={() => <Journal />} />
          <Route path="/audio" exact component={() => <Audio />} />
          <Route path="/rain" exact component={() => <Rain />} />
        </Switch>
      </Router>
      <Router>
        
      </Router>
    </div>
  );
}

export default App;
