import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "./components/Search/Search";
import NotFoundPage from "./Utils/NotFoundPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Search}></Route>
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
