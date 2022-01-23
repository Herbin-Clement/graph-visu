import { useState } from 'react';

import PathFindingVis from './Components/PathFindingVis/PathFindingVis.jsx';
import Header from './Components/Header/Header.jsx';
import { Dijkstra } from "./lib/Dijkstra/Dijktra.js";
import { BreadthFirstSearch, DepthFirstSearch } from "./lib/firstSearch/Search.js";
import { randomWall } from './lib/maze/randomWall.js';

import './App.css';


function App() {

  const pathFinding = [{
    name: "Dijkstra", algo: Dijkstra
  }, {
    name: "BreadthFirstSearch", algo: BreadthFirstSearch
  }, {
    name: "DepthFirstSearch", algo: DepthFirstSearch
  }];

  const mazePattern = [{
    name: "Random", algo: randomWall
  }]

  const [isVisualising, setIsVisualising] = useState(false);
  const [isWallMode, setIsWallMode] = useState(false);
  const [currentAlgo, setCurrentAlgo] = useState(pathFinding[0]);
  const [mazePatternAlgo, setMazePatternAlgo] = useState(mazePattern[0]);



  const startVisualise = (ms) => {
    setIsVisualising(true);
    endVisualise(ms);
  }

  const endVisualise = (ms) => {
    setTimeout(() => {
      setIsVisualising(false);
    }, ms);
  }

  const toggleWallMode = (newValue) => {
    setIsWallMode(newValue);
  }

  const handleMazePatternsClick = (id) => {
    setMazePatternAlgo(mazePattern[0]);
  }

  const handleModClick = (mod) => {
    setIsWallMode(mod);
  }

  const handleAlgorithmClick = (id) => {
    setCurrentAlgo(pathFinding[id]);
  }

  return (
    <div className="App">
      <Header isVisualising={isVisualising}
        handleAlgorithmClick={handleAlgorithmClick}
        handleModClick={handleModClick}
        handleMazePatternsClick={handleMazePatternsClick}
        isWallMode={isWallMode}
        toggleWallMode={toggleWallMode}
      />
      <PathFindingVis startVisualise={startVisualise}
        endVisualise={endVisualise}
        isVisualising={isVisualising}
        isWallMode={isWallMode}
        pathFindingAlgo={currentAlgo}
        mazePatternAlgo={mazePatternAlgo}
      />
    </div>
  );
}

export default App;
