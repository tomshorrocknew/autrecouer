import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Project from "./components/Project";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/project/:id">
          <Project />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
