import "./Vertice.css";

const Vertice = ({id, x, y, value, handleClick, isStartNode, isEndNode}) => {
    let backgroundColor;
    if (isStartNode) backgroundColor = "red";
    else if (isEndNode) backgroundColor = "green";
    else backgroundColor = value ? "#121212" : "999999";
    return (
        <div /*onClick={(e) => handleClick(e, id)}*/
             className="vertice" 
             style={
                 {
                     backgroundColor
                 }
            }
            >
        </div>
    )
}

export default Vertice;