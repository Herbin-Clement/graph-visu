import { useEffect, useState, useRef } from "react";
import { Dijkstra } from "../../lib/Dijkstra/Dijktra.js";
import { BreadthFirstSearch, DepthFirstSearch } from "../../lib/firstSearch/Search.js";
import { createGridGraph, getPath, w, h, x_start_initial, x_end_initial, y_initial } from "../../lib/lib.js";
import Node from "../Node/Node.jsx";
import './PathFindingVis.css';

const PathFindingVis = ({ isVisualising, endVisualise }) => {

  const didMount = useRef(false);

  const [startNode, setStartNode] = useState(x_start_initial + y_initial * w);
  const [endNode, setEndNode] = useState(x_end_initial + y_initial * w);
  const [graph, setGraph] = useState(createGridGraph(w, h));
  const [data, setData] = useState(BreadthFirstSearch(graph, startNode, endNode));
  const [grid, setGrid] = useState(graph.getGraphRepresentation());
  const [click, setClick] = useState(0);
  const [speed, setSpeed] = useState(0);
  console.log(data);
  
  useEffect(() => {
    if (didMount.current) {
      data.display.forEach((v, i) => {
        setTimeout(() => {
          const node = document.getElementsByClassName(`id-${v}`)[0];
          node.classList.add("visited-node");
          node.classList.remove("not-visited-node");
        }, i * 10);
      });
      setTimeout(() => {
        getPath(data.prev, startNode, endNode).forEach((v, i) => {
          setTimeout(() => {
            const node = document.getElementsByClassName(`id-${v}`)[0];
            node.classList.remove("visited-node");
            node.classList.add("path-node")
          }, i * 10);
        });
      }, data.display.length * 10);
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
                  console.log("yo");
                  const props = {
                    key:id,
                    id:id, 
                    y:y,
                    x:x,
                    value:cell,
                    handleClick:handleClick,
                    isStart: id === startNode,
                    isEnd: id === endNode
                  }
                  return <Node {...props}/>
                })}
              </div>
            );
          })}
        </div>  
    </div>
  );
}

export default PathFindingVis;