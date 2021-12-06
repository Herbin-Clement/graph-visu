import "./Node.css";

const Node = ({id, x, y, value, handleClick}) => {
    return (
        <div /*onClick={(e) => handleClick(e, id)}*/
             className="vertice" 
             style={
                 {
                     backgroundColor: value ? "#3E065F" : "#000000"
                 }
            }
            >
        </div>
    )
}

export default Node;