import "./Node.css";

const StartNode = ({id, x, y, value, handleClick}) => {
    return (
        <div /*onClick={(e) => handleClick(e, id)}*/
             className="vertice" 
             style={
                 {
                     backgroundColor: "green"
                 }
            }
            >
        </div>
    )
}

export default StartNode;