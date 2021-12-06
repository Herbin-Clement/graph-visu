import { useEffect, useState, useRef } from "react";
import { Dijkstra, getPath } from "../../lib/Dijkstra/Dijktra.js";
import { createGridGraph, w, h, x_start_initial, x_end_initial, y_initial } from "../../lib/lib.js";
import Node from "../Node/Node.jsx";
import './PathFindingVis.css';

const PathFindingVis = ({ isVisualising, endVisualise }) => {

  const didMount = useRef(false);

  const [startNode, setStartNode] = useState(x_start_initial + y_initial * w);
  const [endNode, setEndNode] = useState(x_end_initial + y_initial * w);
  const [graph, setGraph] = useState(createGridGraph(w, h));
  const [data, setData] = useState(Dijkstra(graph, startNode, endNode));
  const [grid, setGrid] = useState(graph.getGraphRepresentation());
  const [click, setClick] = useState(0);
  // const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    if (didMount.current) {
      data.display.forEach((v, i) => {
        setTimeout(() => {
          const el = document.getElementsByClassName(`id-${v}`)[0];
          el.classList.add("visited-node");
          el.classList.remove("not-visited-node");
        }, i * 50);
      });
      setTimeout(() => {
        getPath(data.prev, startNode, endNode).forEach((v, i) => {
          setTimeout(() => {
            const el = document.getElementsByClassName(`id-${v}`)[0];
            el.classList.remove("visited-node");
            el.classList.add("path-node")
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