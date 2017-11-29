import React, { Component } from "react";
import RegionsField from "./components/DropDownRegional";
import RegionsLvl from "./components/DropDownRgnSlct";
import ScenarioCol from "./components/DropDownScnCol";
import Scenarios from "./components/DropDownScns";

import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
import DropdownButton from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Metsämittari</h1>
        </header>
        <div className="grid">
          <RegionsLvl />
          <RegionsField />
          <ScenarioCol />
          <Scenarios />
        </div>
      </div>
    );
  }
}

export default App;
