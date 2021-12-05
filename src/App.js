import { useEffect, useState, useRef } from "react";
import { Dijkstra, getPath } from "./lib/Dijkstra/Dijktra.js";
import { createGridGraph, w, h } from "./lib/lib.js";
import Vertice from "./Components/Vertice.jsx";

import './App.css';


function App({ text, id }) {

  const didMount = useRef(false);


  const [startNode, setStartNode] = useState(322);
  const [endNode, setEndNode] = useState(973);
  const [graph, setGraph] = useState(createGridGraph(w, h));
  const [data, setData] = useState(Dijkstra(graph, startNode, endNode));
  const [path, setPath] = useState(getPath(data.prev, startNode, endNode));  
  const [grid, setGrid] = useState(graph.getGraphRepresentation());
  const [visited, setVisited] = useState([]);
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    console.log("yo");
    if (didMount.current) {
      data.display.forEach((v, i) => {
        setTimeout(() => {
          setVisited(prevState => [...prevState, v]);
          console.log(visited);
        }, i * 50);
      });
    } else {
      didMount.current = true;
    }
  }, [toggle]);

  // const handleClick = (e, id) => {
  //   let tmp;
  //   if (!visited.includes(id)) {
  //     tmp = [...visited];
  //     tmp.push(id);
  //     setVisited(tmp);
  //   } else {
  //     tmp = [...visited].filter((e) => e !== id);
  //     setVisited(tmp);
  //   }
  // }

  return (
    <div className="App">
      <button onClick={() => setToggle(prevState => !prevState)}> adaz</button>
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
                      // handleClick={handleClick}
                      isStartNode={startNode == id}
                      isEndNode={endNode == id}
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
