import "./Node.css";

const EndNode = ({id, x, y, value}) => {
    return (
        <div
             className="vertice" 
             style={
                 {
                     backgroundColor: "#FFC40A",
                 }
            }
            >
                <div class="circle end"></div>
        </div>
    )
}

export default EndNode;