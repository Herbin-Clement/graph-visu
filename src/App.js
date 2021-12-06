import { useEffect, useState, useRef } from "react";
import { Dijkstra, getPath } from "./lib/Dijkstra/Dijktra.js";
import { createGridGraph, w, h } from "./lib/lib.js";
import Node from "./Components/Node.jsx";
import StartNode from "./Components/StartNode.jsx";
import EndNode from "./Components/EndNode.jsx";
import PathNode from "./Components/PathNode.jsx";

import './App.css';


function App({ text, id }) {

  const didMount = useRef(false);

  const [startNode, setStartNode] = useState(840);
  const [endNode, setEndNode] = useState(973);
  const [graph, setGraph] = useState(createGridGraph(w, h));
  const [data, setData] = useState(Dijkstra(graph, startNode, endNode));
  const [path, setPath] = useState([]);
  const [grid, setGrid] = useState(graph.getGraphRepresentation());
  const [visited, setVisited] = useState([]);
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    console.log("yo");
    if (didMount.current) {
      data.display.forEach((v, i) => {
        setTimeout(() => {
          setVisited(prevState => [...prevState, v]);
        }, i * 50);
      });
      setTimeout(() => {
        setPath(getPath(data.prev, startNode, endNode));
        console.log("da")
      }, data.display.length * 50);
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
      <button onClick={() => setToggle(prevState => !prevState)}>adaz</button>
        <div className="grid">
          {grid.map((row, y) => {
            return (
              <div key={y} className="row">
                {row.map((cell, x) => {
                  const id = w * y + x;
                  if (visited.includes(id)) cell = true;
                  const props = {
                    key:id,
                    id:id, 
                    y:y,
                    x:x,
                    value:cell,
                    // handleClick={handleClick}
                  }
                  if (id === startNode) return <StartNode {...props}/>
                  else if (id === endNode) return <EndNode {...props}/>
                  else if (path.includes(id)) return <PathNode {...props}/>
                  else return <Node {...props}/>
                })}
              </div>
            );
          })}
        </div>  
    </div>
  );
}

export default App;
