import { useEffect, useState, useRef } from "react";
import { Dijkstra } from "../../lib/Dijkstra/Dijktra.js";
import { BreadthFirstSearch, DepthFirstSearch } from "../../lib/firstSearch/Search.js";
import { createGridGraph, getPath, w, h, x_start_initial, x_end_initial, y_initial } from "../../lib/lib.js";
import  { divide } from '../../lib/maze/recursiveDivision.js';
import { randomWall } from '../../lib/maze/randomWall.js';
import Node from "../Node/Node.jsx";
import './PathFindingVis.css';

const PathFindingVis = ({ isVisualising, endVisualise, isWallMode, idCurrAlgoPath }) => {

  const pathFinding = [{
    name: "Dijkstra", algo: Dijkstra
  }, {
    name: "BreadthFirstSearch", algo: BreadthFirstSearch
  }, {
    name: "DepthFirstSearch", algo: DepthFirstSearch
  }];

  
  const didMount = useRef(false);
  
  const [startNode, setStartNode] = useState(x_start_initial + y_initial * w);
  const [endNode, setEndNode] = useState(x_end_initial + y_initial * w);
  const [graph, setGraph] = useState(createGridGraph(w, h));
  const [grid, setGrid] = useState(graph.getGraphRepresentation());
  const [click, setClick] = useState(0);
  const [speed, setSpeed] = useState(5);

  useEffect(() => {
    console.log(idCurrAlgoPath % pathFinding.length);
    // const wall = divide(graph, 0, 0, w, h, 0, 2);
    const data = pathFinding[idCurrAlgoPath % pathFinding.length].algo(graph, startNode, endNode);
    if (didMount.current) {
      data.display.forEach((v, i) => {
        setTimeout(() => {
          const node = document.getElementsByClassName(`id-${v}`)[0];
          node.classList.add("visited-node");
          node.classList.remove("not-visited-node");
        }, i * speed);
      });
      setTimeout(() => {
        getPath(data.prev, startNode, endNode).forEach((v, i) => {
          setTimeout(() => {
            const node = document.getElementsByClassName(`id-${v}`)[0];
            node.classList.remove("visited-node");
            node.classList.add("path-node")
          }, i * speed);
        });
      }, data.display.length * speed);
    } else {
      didMount.current = true;
    }
  }, [isVisualising]);

  const handleClick = (id) => {
    // console.log(`isWallMode ? ${isWallMode}`);
    if (isWallMode) {
      toggleNode(id);
    } else {
      setClick(prevState => prevState + 1);
      if (click % 2 === 0){
        setStartNode(id);
        // setData(Dijkstra(graph, id, endNode));
      } else {
        setEndNode(id);
        // setData(Dijkstra(graph, startNode, id));
      }
    }
  }

  const toggleNode = (id) => {
    setGraph(prevState => {
      prevState.toggle_vertice(id);
      return prevState;
    });
    const node = document.getElementsByClassName(`id-${id}`)[0];
    node.classList.toggle("wall");
    // setGrid(prevGrid => {
    //   const x = id % h;
    //   const y = Math.floor(id / h);
    //   prevGrid[y][x] = true;
    //   return prevGrid;
    // });
  }

  const tmp = () => {
    clearGrid();
    console.log("yo");
    const wall = randomWall(w, h, startNode, endNode);
    console.log(wall);
    let i = 0;
    wall.forEach(id => {
      setTimeout(() => {
        toggleNode(id);
      }, i * 10);
      i++;
    });
  }

  const clearGrid = () => {
    setGraph(() => createGridGraph(w, h));
    setGrid(() => graph.getGraphRepresentation());
    for (let i = 0; i < w * h; i++) {
      const div = document.getElementsByClassName(`id-${i}`)[0];
      div.classList.remove("wall");
    }
  }

  return (
    <div className="visualisation">
        <div className="title" onClick={() => tmp()}>{pathFinding[idCurrAlgoPath % pathFinding.length].name}</div>
        <div className="grid">
          {grid.map((row, y) => {
            return (
              <div key={y} className="row">
                {row.map((cell, x) => {
                  const id = w * y + x;
                  const props = {
                    key:id,
                    id:id, 
                    y:y,
                    x:x,
                    handleClick:handleClick,
                    isStart: id === startNode,
                    isEnd: id === endNode,
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