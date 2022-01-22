import './Header.css';


const Header = ({ startVisualise, isVisualising, isWallMode, toggleWallMode, handlePathFindingClick }) => {

    const handleClickVisualise = () => {
        if (!isVisualising) {
            startVisualise();
        }
    }

    const handleClickWall = () => {
        toggleWallMode(!isWallMode);
    }

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
            <div className="">

            </div>
            <div className="menu">
                <div className="title">Algorithm</div>
                <div className="list">
                    <div>Dijkstra</div>
                    <div>BreathFindingAlgorithm</div>
                    <div>DepthFindingAlgorithm</div>
                </div>
            </div>
            <div className="menu">
                <div className="title">Maze & Patterns</div>
                <div className="list">
                    <div>Random Wall</div>
                    <div>Recursive Division</div>
                </div>
            </div>
        </div>
    );
};

export default Header;