import React, { useEffect, useState } from "react";
import { Dijkstra, getPath } from "./lib/Dijkstra/Dijktra.js";
import { createGridGraph, w, h } from "./lib/lib.js";

import Vertice from "./Components/Vertice.jsx";

import './App.css';

function App({ text, id }) {

  const graph = createGridGraph(w, h);

  const {distances, prev} = Dijkstra(graph, 322, 973);

  // console.log(distances);
  // console.log(prev);
  const path = getPath(prev, 322, 973);
  console.log(path);
  
  const [grid, setGrid] = useState(graph.getGraphRepresentation());
  const [visited, setVisited] = useState([]);
  
  distances.forEach((v,i) => {
    if (v !== Infinity) visited.push(i);
  });

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
