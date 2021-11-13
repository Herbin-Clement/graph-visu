import { useState } from "react";

import Vertice from "./Components/Vertice.jsx";

import './App.css';

const nbRow = 12;
const nbCol = 25;

const createA = (nbCol, nbRow) => {
  return new Array(nbRow).fill(new Array(nbCol).fill(false));
}

function App() {

  const handleClick = (col, row) => {
    console.log(`col: ${col}, row: ${row}`);
  }

  const [vertice, setVertices] = useState(createA(nbCol, nbRow, handleClick));

  return (
    <div className="App">
      <div className="grid">
      {
        vertice.map((row, i) => {
          return (
            <div className="row">
              {
                row.map((v, j) => {
                  const idx = i * nbRow + j * nbCol;
                  return <Vertice key={idx} col={j} row={i} nbCol={nbCol} nbRow={nbRow} value={v} handleClick={handleClick}/>
                })
              }
            </div>
          );
        })
      }
      </div>
    </div>
  );
}

export default App;
