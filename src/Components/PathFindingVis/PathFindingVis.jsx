import { useEffect, useState, useRef } from "react";
import { Dijkstra, getPath } from "../../lib/Dijkstra/Dijktra.js";
import { createGridGraph, w, h, x_start_initial, x_end_initial, y_initial } from "../../lib/lib.js";
import Node from "../Node/Node.jsx";
import StartNode from "../Node/StartNode.jsx";
import EndNode from "../Node/EndNode.jsx";
import PathNode from "../Node/PathNode.jsx";

import './PathFindingVis.css';

const PathFindingVis = ({ isVisualising, endVisualise }) => {

  const didMount = useRef(false);

  const [startNode, setStartNode] = useState(x_start_initial + y_initial * w);
  const [endNode, setEndNode] = useState(x_end_initial + y_initial * w);
  const [graph, setGraph] = useState(createGridGraph(w, h));
  const [data, setData] = useState(Dijkstra(graph, startNode, endNode));
  const [path, setPath] = useState([]);
  const [grid, setGrid] = useState(graph.getGraphRepresentation());
  const [visited, setVisited] = useState([]);
  const [click, setClick] = useState(0);
  // const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    if (didMount.current) {
      data.display.forEach((v, i) => {
        setTimeout(() => {
          setVisited(prevState => [...prevState, v]);
        }, i * 50);
      });
      setTimeout(() => {
        getPath(data.prev, startNode, endNode).forEach((v, i) => {
          setTimeout(() => {
            setPath(prevState => [...prevState, v]);
            if (v === endNode) endVisualise();
          }, i * 50);
        });
      }, data.display.length * 50);
    } else {
      didMount.current = true;
    }
  }, [isVisualising]);

  const handleClick = (id) => {
    setClick(prevState => prevState + 1);
    if (click % 2 === 0){
      setStartNode(id);
      setData(Dijkstra(graph, id, endNode));
    } else {
      setEndNode(id);
      setData(Dijkstra(graph, startNode, id));
    }
  }

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
                    handleClick:handleClick
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
