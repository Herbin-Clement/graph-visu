import "./Node.css";

const StartNode = ({id, x, y, value, handleClick}) => {
    return (
        <div /*onClick={(e) => handleClick(e, id)}*/
             className="vertice" 
             style={
                 {
                    backgroundColor: "#FFC40A",
                    //  borderRadius: "74% 26% 70% 30% / 35% 76% 24% 65% "
                 }
            }
            >
        </div>
    )
}

export default StartNode;