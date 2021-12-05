import "./Vertice.css";

const Vertice = ({id, x, y, value, handleClick}) => {
    return (
        <div onClick={(e) => handleClick(e, id)} className="vertice" style={{backgroundColor: value ? "#101010" : "#999999", color: "orange"}}>
            {/* {value ? id.toString() + "t": id.toString() + "v"} */}
        </div>
    )
}

export default Vertice;