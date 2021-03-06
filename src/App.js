import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, MoonRise, Messages, Animals, Light, Ombre, Rain, Line, Stones, Birds } from "./components";
import Journal from "./components/Journal";
import Audio from "./components/Audio"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/moonrise" exact component={() => <MoonRise />} />
          <Route path="/messages" exact component={() => <Messages />} />
          <Route path="/animals" exact component={() => <Animals />} />
          <Route path="/light" exact component={() => <Light />} />
          <Route path="/ombre" exact component={() => <Ombre />} />
          <Route path="/journal" exact component={() => <Journal />} />
          <Route path="/audio" exact component={() => <Audio />} />
          <Route path="/rain" exact component={() => <Rain />} />
          <Route path="/line" exact component={() => <Line />} />
          <Route path="/stones" exact component={() => <Stones />} />
          <Route path="/birds" exact component={() => <Birds />} />
        </Switch>
      </Router>
      <Router>
        
      </Router>
    </div>
  );
}

export default App;
