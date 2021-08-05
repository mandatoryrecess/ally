import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import { Navigation, Home, Ripple, Messages, Animals, Dots, Ombre } from "./components";
=======
import { Navigation, Home, Ripple, Messages, Animals, Dots, Ombre, Rain } from "./components";
>>>>>>> rain
import Journal from "./components/Journal";
import Audio from "./components/Audio"

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
          <Route path="/dots" exact component={() => <Dots />} />
          <Route path="/ombre" exact component={() => <Ombre />} />
          <Route path="/journal" exact component={() => <Journal />} />
<<<<<<< HEAD
          <Route path="/audio" exact component={() => <Audio />} />
=======
          <Route path="/rain" exact component={() => <Rain />} />
>>>>>>> rain
        </Switch>
      </Router>
    </div>
  );
}

export default App;
