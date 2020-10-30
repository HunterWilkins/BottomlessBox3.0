import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Base from "./pages/Base";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Base}></Route>
      </Switch>
    </Router>
  );
}

export default App;
