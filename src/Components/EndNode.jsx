import "./Node.css";

const EndNode = ({id, x, y, value, handleClick}) => {
    return (
        <div /*onClick={(e) => handleClick(e, id)}*/
             className="vertice" 
             style={
                 {
                     backgroundColor: "#F58840",
                     borderRadius: "24% 76% 32% 68% / 71% 30% 70% 29%"
                 }
            }
            >
        </div>
    )
}

export default EndNode;