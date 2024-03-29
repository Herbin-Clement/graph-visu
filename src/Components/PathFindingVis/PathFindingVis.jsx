import { useEffect, useState, useRef } from "react";
import { createGridGraph, getPath, w, h, x_start_initial, x_end_initial, y_initial } from "../../lib/lib.js";
import Node from "../Node/Node.jsx";
import './PathFindingVis.css';

const visualisation = (graph, startNode, endNode, speed, pathFindingAlgo, setIsVisualising) => {
  const data = pathFindingAlgo.algo(graph, startNode, endNode);
  const path = getPath(data.prev, startNode, endNode);
  data.display.pop();
  data.display.forEach((v, i) => {
    setTimeout(() => {
      const node = document.getElementsByClassName(`id-${v}`)[0];
      node.classList.add("visited-node");
      node.classList.remove("not-visited-node");
    }, i * speed);
  });
  if (data.found) {
    setTimeout(() => {
      path.forEach((v, i) => {
        setTimeout(() => {
          const node = document.getElementsByClassName(`id-${v}`)[0];
          node.classList.remove("visited-node");
          node.classList.add("path-node")
        }, i * speed * 3 + 1000);
      });
    }, data.display.length * speed);
  }
  setTimeout(() => setIsVisualising(false), (data.display.length + path.length) * speed + 1000);
}

const PathFindingVis = ({ pathFindingAlgo, isWallMode, mazePatternAlgo }) => {

  const [startNode, setStartNode] = useState(x_start_initial + y_initial * w);
  const [endNode, setEndNode] = useState(x_end_initial + y_initial * w);
  const [graph, setGraph] = useState(createGridGraph(w, h));
  const [grid, setGrid] = useState(graph.getGraphRepresentation());
  const [click, setClick] = useState(0);
  const [speed, setSpeed] = useState(10);
  const [isVisualising, setIsVisualising] = useState(false);
  const [canVisualise, setCanVisualise] = useState(true);
  const [walls, setWalls] = useState([]);

  const startVisualise = () => {
    if (canVisualise) {
      setIsVisualising(true);
      setCanVisualise(false);
      visualisation(graph, startNode, endNode, speed, pathFindingAlgo, setIsVisualising);
    }
  }

  const handleClick = (id) => {
    if (isWallMode) {
      toggleWall(id);
    } else {
      if (!walls.includes(id) && id !== startNode && id !== endNode) {
        setClick(prevState => prevState + 1);
        if (click % 2 === 0) {
          setStartNode(id);
        } else {
          setEndNode(id);
        }
      }
    }
  }

  const toggleWall = (id) => {
    console.log(id);
    setGraph(prevState => {
      prevState.toggle_vertice(id);
      return prevState;
    });
    const node = document.getElementsByClassName(`id-${id}`)[0];
    node.classList.toggle("wall");
  }

  const addWall = () => {
    if (!isVisualising) {
      clearGrid();
      setCanVisualise(false);
      const wall = mazePatternAlgo.algo(w, h, startNode, endNode);
      wall.forEach((id, i) => {
        // setTimeout(() => {
          // }, i * speed);
          toggleWall(id);
      });
      // setTimeout(() => setCanVisualise(true), wall.length * speed + 1000);
      setTimeout(() => setCanVisualise(true), 1000);
    }
  }
  
  const clearGrid = () => {
    if (!isVisualising) {
      setCanVisualise(true);
      setGraph(() => createGridGraph(w, h));
      setGrid(() => graph.getGraphRepresentation());
      for (let i = 0; i < w * h; i++) {
        const div = document.getElementsByClassName(`id-${i}`)[0];
        div.classList.remove("wall");
        div.classList.remove("visited-node");
        div.classList.remove("path-node")
        div.classList.add("not-visited-node");
      }
    }
  }

  return (
    <div className="visualisation">
      <div className="buttons">
        <div className="button" onClick={() => clearGrid()}
                                style={{color: isVisualising ? "red" : ""}}
          >Clear !</div>
        <div className="button" onClick={() => startVisualise()}
                                style={{color: isVisualising || !canVisualise ? "red" : ""}}
          >Visualize !</div>
        <div className="button" onClick={() => addWall()}
                                style={{color: isVisualising ? "red" : ""}}
          >Add Wall !</div>
      </div>
      <div className="grid">
        {grid.map((row, y) => {
          return (
            <div key={y} className="row">
              {row.map((_, x) => {
                const id = w * y + x;
                const props = {
                  key: id,
                  id: id,
                  y: y,
                  x: x,
                  handleClick: handleClick,
                  isStart: id === startNode,
                  isEnd: id === endNode,
                }
                return <Node {...props} />
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PathFindingVis;