import { useState } from "react";
import { Dijkstra } from "./lib/Dijkstra/Dijktra.js";
import { createGridGraph, w, h } from "./lib/lib.js";

import Vertice from "./Components/Vertice.jsx";

import './App.css';

function App() {

  const graph = createGridGraph(w, h);

  console.log(Dijkstra(graph, 0));

  const [grid, setGrid] = useState(graph.getGraphRepresentation());
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
          {grid.map((row, y) => {
            return (
              <div key={y} className="row">
                {row.map((cell, x) => {
                  const id = w * y + x;
                  if (visited.includes(id)) cell = true;
                  return (
                    <Vertice 
                      key={id}
                      id={id} 
                      y={y} 
                      x={x} 
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
