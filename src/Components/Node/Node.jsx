import "./Node.css";

const Node = ({id, x, y, value, handleClick}) => {
    return (
        <div /*onClick={(e) => handleClick(e, id)}*/
             className="vertice" 
             style={
                 {
                     backgroundColor: value ? "#679BF1" : "#1E2328"
                 }
            }
            >
        </div>
    )
}

export default Node;