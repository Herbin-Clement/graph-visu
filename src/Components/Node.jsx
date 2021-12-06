import "./Node.css";

const Node = ({id, x, y, value, handleClick}) => {
    return (
        <div /*onClick={(e) => handleClick(e, id)}*/
             className="vertice" 
             style={
                 {
                     backgroundColor: value ? "#121212" : "999999"
                 }
            }
            >
        </div>
    )
}

export default Node;