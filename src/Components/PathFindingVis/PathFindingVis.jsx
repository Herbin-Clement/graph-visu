import { useEffect, useState, useRef } from "react";
import { Dijkstra, getPath } from "../../lib/Dijkstra/Dijktra.js";
import { createGridGraph, w, h } from "../../lib/lib.js";
import Node from "../Node/Node.jsx";
import StartNode from "../Node/StartNode.jsx";
import EndNode from "../Node/EndNode.jsx";
import PathNode from "../Node/PathNode.jsx";

import './PathFindingVis.css';

const PathFindingVis = ({ isVisualising, endVisualise }) => {

  const didMount = useRef(false);

  const [startNode, setStartNode] = useState(970);
  const [endNode, setEndNode] = useState(973);
  const [graph, setGraph] = useState(createGridGraph(w, h));
  const [data, setData] = useState(Dijkstra(graph, startNode, endNode));
  const [path, setPath] = useState([]);
  const [grid, setGrid] = useState(graph.getGraphRepresentation());
  const [visited, setVisited] = useState([]);
  // const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    if (didMount.current) {
      data.display.forEach((v, i) => {
        setTimeout(() => {
          setVisited(prevState => [...prevState, v]);
        }, i * 25);
      });
      setTimeout(() => {
        getPath(data.prev, startNode, endNode).forEach((v, i) => {
          setTimeout(() => {
            setPath(prevState => [...prevState, v]);
            if (v === endNode) endVisualise();
          }, i * 25);
        });
      }, data.display.length * 25);
    } else {
      didMount.current = true;
    }
  }, [isVisualising]);

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
    <div className="visualisation">
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

export default PathFindingVis;
