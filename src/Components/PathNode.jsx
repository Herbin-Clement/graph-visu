import "./Node.css";

const PathNode = ({id, x, y, value, handleClick}) => {
    return (
        <div /*onClick={(e) => handleClick(e, id)}*/
             className="vertice" 
             style={
                 {
                     backgroundColor: "purple"
                 }
            }
            >
        </div>
    )
}

export default PathNode;