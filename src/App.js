import React, { Component } from 'react';
import RegionsField from './components/DropDownRegional';
import RegionsLvl from './components/DropDownRgnSlct';
import Scenarios from './components/DropDownScnCol';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import DropdownButton from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Metsämittari</h1>
        </header>
          <h3>Aluetaso: </h3>
          <div className="col-md-4"><RegionsLvl /></div>,
          <h3>Alue: </h3>
          <div className="col-md-4"><RegionsField /></div>,
          <h3>Skenaariot: </h3>
          <div className="col-md-4"><Scenarios /></div>,
      </div>
    );
  }
}

export default App;
