import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Ripple, Messages, Animals, Dots, Ombre } from "./components";

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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
