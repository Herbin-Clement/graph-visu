import "./Vertice.css";

const Vertice = ({id, col, row, value, handleClick}) => {
    return (
        <div onClick={(e) => handleClick(e, id)} className="vertice" style={{backgroundColor: value ? "black" : "white", color: "orange"}}>
            {value ? id.toString() + "t": id.toString() + "v"}
        </div>
    )
}

export default Vertice;