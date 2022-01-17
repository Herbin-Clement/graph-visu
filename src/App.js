import { useState } from 'react';

import PathFindingVis from './Components/PathFindingVis/PathFindingVis.jsx';
import Header from './Components/Header/Header.jsx';

import './App.css';


function App({ text, id }) {

  const [isVisualising, setIsVisualising] = useState(false);
  const [isWallMode, setIsWallMode] = useState(true);
  const [idCurrAlgoPath, setIdCurrAlgoPath] = useState(0);

  const startVisualise = () => {
    setIsVisualising(true);
  }

  const endVisualise = () => {
    setIsVisualising(false);
  }

  const toggleWallMode = (newValue) => {
    setIsWallMode(newValue);
  }

  const handlePathFindingClick = () => {
    setIdCurrAlgoPath(prevState => prevState + 1);
    console.log(idCurrAlgoPath);
  }

  return (
    <div className="App">
      <Header startVisualise={startVisualise} 
              isVisualising={isVisualising} 
              isWallMode={isWallMode} 
              toggleWallMode={toggleWallMode} 
              handlePathFindingClick={handlePathFindingClick}/>
      <PathFindingVis endVisualise={endVisualise} 
                      isVisualising={isVisualising} 
                      isWallMode={isWallMode} 
                      idCurrAlgoPath={idCurrAlgoPath}/>
    </div>
  );
}

export default App;
