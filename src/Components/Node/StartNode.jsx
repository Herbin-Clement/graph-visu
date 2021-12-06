import "./Node.css";

const StartNode = ({id, x, y, value}) => {
    return (
        <div
             className="vertice" 
             style={
                 {
                    backgroundColor: "#FFC40A",
                 }
            }
            >
                <div className="circle start"></div>
        </div>
    )
}

export default StartNode;