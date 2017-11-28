import React, { Component } from 'react';
import './App.css';
// Backend datagetter. Currently not functioning
import Data from './data/Data';
// Placeholder containers
import RegionLevelContainer from './components/RegionLevelContainer';
import RegionContainer from './components/RegionContainer';
import ScenarioCollectionsContainer from './components/ScenarioCollectionsContainer';
// Placeholder data components (will be removed after backend requests are working)
import RegionLevelsData from './data/RegionLevelsData';
import RegionData from './data/RegionData';
import ScenarioCollectionsData from './data/ScenarioCollectionsData';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      regionLevels: [],
      regions: [],
      scenarioCollections: []
    };
  }

  componentDidMount() {
    Data.getRegionLevels().then(result => {
      this.setState({ regionLevels: result });
    });

    RegionData.getRegions().then(result => {
      this.setState({ regions: result });
    });

    ScenarioCollectionsData.getScenarioCollections().then(result => {
      this.setState({ scenarioCollections: result });
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {
            this.state.regionLevels.map(element => <RegionLevelContainer key={element.id}
              id={element.id}
              name={element.name}
              description={element.description}
              order={element.order} />)
          }

          {
            this.state.regions.map(element => <RegionContainer key={element.id}
              id={element.id}
              name={element.name}
              shortName={element.shortName}
              order={element.order}
              />)
          }

          {
            this.state.scenarioCollections.map(element => <ScenarioCollectionsContainer key={element.id}
              id={element.id}
              name={element.name}
              description={element.description}
              order={element.order} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
