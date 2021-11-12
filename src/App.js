import "./Components/Vertice.jsx";

import './App.css';
import Vertice from "./Components/Vertice.jsx";

const w = 75;
const h = 75;
const nbRow = 20;
const nbCol = 20;

const createA = (x, y) => {
  const tab = new Array(y).fill(new Array(x).fill(null));
  return tab.map((row, i) => {
    return row.map((column, j) => {
      const idx = i * 10 + j;
      return <Vertice key={idx} name={idx} nbCol={nbCol} nbRow={nbRow}/>
    })
  });
}

function App() {
  return (
    <div className="App">
      <div style={{height: h.toString() + "vh", width: w.toString() + "vw"}} className="grid">
      {
        createA(nbRow, nbCol).map((e, i) => {
          return (
            <div key={i} className="row" style={{height: (100/nbRow).toString() + "%"}}>
              {e}
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
