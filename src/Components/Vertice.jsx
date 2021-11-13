import "./Vertice.css";

const Vertice = ({col, row, nbCol, nbRow, value, handleClick}) => {
    console.log(value);
    return (
        <div onClick={() => handleClick(col, row)} className="vertice" style={{backgroundColor: value ? "black" : "white"}}>
            
        </div>
    )
}

export default Vertice;