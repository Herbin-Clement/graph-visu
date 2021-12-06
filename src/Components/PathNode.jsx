import "./Node.css";

const PathNode = ({id, x, y, value, handleClick}) => {
    return (
        <div /*onClick={(e) => handleClick(e, id)}*/
             className="vertice" 
             style={
                 {
                     backgroundColor: "#700B97"
                 }
            }
            >
        </div>
    )
}

export default PathNode;