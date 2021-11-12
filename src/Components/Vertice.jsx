import "./Vertice.css";

const Vertice = ({name, nbCol, nbRow}) => {
    return (
        <div className="vertice" style={{width: (100/nbCol).toString() + "%"}}>
            {name}
        </div>
    )
}

export default Vertice;