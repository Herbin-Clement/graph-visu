import './Header.css';


const Header = ({ isVisualising, handleMazePatternsClick, handleModClick, handleAlgorithmCLick }) => {

    return (
        <div className="header">
            {/* <div onClick={() => handleClickWall()} className={`vis-button`}>
                {isWallMode ? "Wall Mod" : "Start-End Mod"}
            </div>
            <div onClick={() => handleClickVisualise()} className={`vis-button ${isVisualising ? "disabled" : ""}`}>
                Visualise !
            </div>
            <div onClick={() => handlePathFindingClick()} className={`vis-button`}>
                Change path finding algorithm !
            </div> */}
            <div className="menu">
                <div className="title">Mod</div>
                <div className="itemList">
                    <div>Wall Mod</div>
                    <div>Start & End Mod</div>
                </div>
            </div>
            <div className="menu">
                <div className="title">Algorithm</div>
                <div className="itemList">
                    <div>Dijkstra</div>
                    <div>BreathFindingAlgorithm</div>
                    <div>DepthFindingAlgorithm</div>
                </div>
            </div>
            <div className="menu">
                <div className="title">Maze & Patterns</div>
                <div className="itemList">
                    <div>Random Wall</div>
                    <div>Recursive Division</div>
                </div>
            </div>
        </div>
    );
};

export default Header;