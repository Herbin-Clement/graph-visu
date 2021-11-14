import { useState } from "react";
import { createGridGraph } from "./lib/lib.js";

import Vertice from "./Components/Vertice.jsx";

import './App.css';

const nbRow = 30;
const nbCol = 18;
createGridGraph();

function App() {

  const [grid, setGrid] = useState(new Array(nbCol).fill(new Array(nbRow).fill(false)));
  const [visited, setVisited] = useState([]);


  const handleClick = (e, id) => {
    let tmp;
    if (!visited.includes(id)) {
      tmp = [...visited];
      tmp.push(id);
      setVisited(tmp);
    } else {
      tmp = [...visited].filter((e) => e !== id);
      setVisited(tmp);
    }
    console.log(tmp);
  }

  return (
    <div className="App">
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx} className="row">
                {row.map((cell, colIdx) => {
                  const id = nbRow * rowIdx + colIdx;
                  if (visited.includes(id)) cell = true;
                  return (
                    <Vertice 
                      key={id}
                      id={id} 
                      row={rowIdx} 
                      col={colIdx} 
                      value={cell} 
                      handleClick={handleClick}
                      />
                  );
                })}
              </div>
            );
          })}
        </div>  
    </div>
  );
}

export default App;
