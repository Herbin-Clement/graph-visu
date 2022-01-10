import { useState } from 'react';

import PathFindingVis from './Components/PathFindingVis/PathFindingVis.jsx';
import Header from './Components/Header/Header.jsx';

import './App.css';


function App({ text, id }) {

  const [isVisualising, setIsVisualising] = useState(false);
  const [isWallMode, setIsWallMode] = useState(true);

  const startVisualise = () => {
    setIsVisualising(true);
  }

  const endVisualise = () => {
    setIsVisualising(false);
  }

  const toggleWallMode = (newValue) => {
    setIsWallMode(newValue);
  }

  return (
    <div className="App">
      <Header startVisualise={startVisualise} isVisualising={isVisualising} isWallMode={isWallMode} toggleWallMode={toggleWallMode}/>
      <PathFindingVis endVisualise={endVisualise} isVisualising={isVisualising} isWallMode={isWallMode}/>
    </div>
  );
}

export default App;
