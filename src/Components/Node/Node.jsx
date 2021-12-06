import "./Node.css";

const Node = ({id, handleClick, isStart, isEnd}) => {
    return (
        <div onClick={() => handleClick(id)}
             className={`id-${id} vertice not-visited-node`}
             style={{
                 backgroundColor: isStart || isEnd ? "#FFC40A" : ""
             }}
            >
                {isStart && <div className="circle start"></div>}
                {isEnd && <div className="circle end"></div>}
        </div>
    )
}

export default Node;