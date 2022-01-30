import "./Node.css";

const Node = ({id, handleClick, isStart, isEnd}) => {

    return (
        <div className="wrapper">
            <div onClick={() => handleClick(id)}
                className={`id-${id} vertice not-visited-node`}
                style={{
                    backgroundColor: isStart || isEnd ? "#00ADB5" : ""
                }}
                >
                    {isStart && <div className="circle start"></div>}
                    {isEnd && <div className="circle end"></div>}
            </div>
        </div>
    )
}

export default Node;