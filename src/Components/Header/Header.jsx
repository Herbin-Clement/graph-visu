import Menu from './Menu.jsx';
import './Header.css';


const Header = ({ isVisualising, handleMazePatternsClick, handleModClick, handleAlgorithmClick }) => {

    return (
        <div className="header">
            <Menu title={"Mod"}
                  itemList={["Start & End Mod", "Wall Mod"]}
                  handleClick={handleModClick}
            />
            <Menu title={"Algorithm"}
                  itemList={["Dijkstra", "BreathFindingAlgorithm", "DepthFindingAlgorithm"]}
                  handleClick={handleAlgorithmClick}
            />
            <Menu title={"Maze & Patterns"}
                  itemList={["Random Wall", "Recursive Division"]}
                  handleClick={handleMazePatternsClick}
            />
        </div>
    );
};

export default Header;