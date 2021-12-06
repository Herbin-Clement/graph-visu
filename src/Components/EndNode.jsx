import "./Node.css";

const EndNode = ({id, x, y, value, handleClick}) => {
    return (
        <div /*onClick={(e) => handleClick(e, id)}*/
             className="vertice" 
             style={
                 {
                     backgroundColor: "red"
                 }
            }
            >
        </div>
    )
}

export default EndNode;