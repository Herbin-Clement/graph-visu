import { useEffect, useState, useRef } from "react";
import { createGridGraph, getPath, w, h, x_start_initial, x_end_initial, y_initial } from "../../lib/lib.js";
import Node from "../Node/Node.jsx";
import './PathFindingVis.css';

const visualisation = (graph, startNode, endNode, speed, pathFindingAlgo) => {
  const data = pathFindingAlgo.algo(graph, startNode, endNode);
  data.display.forEach((v, i) => {
    setTimeout(() => {
      const node = document.getElementsByClassName(`id-${v}`)[0];
      node.classList.add("visited-node");
      node.classList.remove("not-visited-node");
    }, i * speed);
  });
  if (data.found) {
    setTimeout(() => {
      getPath(data.prev, startNode, endNode).forEach((v, i) => {
        setTimeout(() => {
          const node = document.getElementsByClassName(`id-${v}`)[0];
          node.classList.remove("visited-node");
          node.classList.add("path-node")
        }, i * speed);
      });
    }, data.display.length * speed);
  }
}

const PathFindingVis = ({ isVisualising, startVisualise, pathFindingAlgo, isWallMode, mazePatternAlgo }) => {

  const didMount = useRef(false);

  const [startNode, setStartNode] = useState(x_start_initial + y_initial * w);
  const [endNode, setEndNode] = useState(x_end_initial + y_initial * w);
  const [graph, setGraph] = useState(createGridGraph(w, h));
  const [grid, setGrid] = useState(graph.getGraphRepresentation());
  const [click, setClick] = useState(0);
  const [speed, setSpeed] = useState(5);

  useEffect(() => {
    if (didMount.current) {
      visualisation(graph, startNode, endNode, speed, pathFindingAlgo);
    } else {
      didMount.current = true;
    }
  }, [isVisualising]);

  const handleClick = (id) => {
    if (isWallMode) {
      toggleWall(id);
    } else {
      setClick(prevState => prevState + 1);
      if (click % 2 === 0) {
        setStartNode(id);
      } else {
        setEndNode(id);
      }
    }
  }

  const toggleWall = (id) => {
    setGraph(prevState => {
      prevState.toggle_vertice(id);
      return prevState;
    });
    const node = document.getElementsByClassName(`id-${id}`)[0];
    node.classList.toggle("wall");
  }

  const addWall = () => {
    clearGrid();
    const wall = mazePatternAlgo.algo(w, h, startNode, endNode);
    wall.forEach((id, i) => {
      setTimeout(() => {
        toggleWall(id);
      }, i * 10);
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
      <div className="button">
        <div className="title" onClick={() => startVisualise(speed * w * h)}>Visualize !</div>
        <div className="title" onClick={() => addWall()}>Add Wall !</div>
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