import './Header.css';


const Header = ({ startVisualise, isVisualising, isWallMode, toggleWallMode }) => {

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
            <div onClick={() => handleClickVisualise()} className={`vis-button ${isVisualising ? "disabled" : ""}`}>
                Visualise !
            </div>
            <div onClick={() => handleClickWall()} className={`vis-button`}>
                {isWallMode ? "Wall Mod" : "Start-End Mod"}
            </div>
        </div>
    );
};

export default Header;