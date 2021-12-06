import { useState } from 'react';

import PathFindingVis from './Components/PathFindingVis/PathFindingVis.jsx';
import Header from './Components/Header/Header.jsx';

import './App.css';


function App({ text, id }) {

  const [isVisualising, setIsVisualising] = useState(false);

  const startVisualise = () => {
    console.log("start")
    setIsVisualising(true);
  }

  const endVisualise = () => {
    console.log("end")
    setIsVisualising(false);
  }

  return (
    <div className="App">
      <Header startVisualise={startVisualise} isVisualising={isVisualising}/>
      <PathFindingVis endVisualise={endVisualise} isVisualising={isVisualising}/>
    </div>
  );
}

export default App;
