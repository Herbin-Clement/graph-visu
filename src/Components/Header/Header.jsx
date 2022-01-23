import Menu from './Menu.jsx';
import './Header.css';


const Header = ({ isVisualising, handleMazePatternsClick, handleModClick, handleAlgorithmCLick }) => {

    return (
        <div className="header">
            <Menu title={"Mod"}
                  itemList={["Wall Mod", "Start & End Mod"]}
            />
            <Menu title={"Algorithm"}
                  itemList={["Dijkstra", "BreathFindingAlgorithm", "DepthFindingAlgorithm"]}
            />
            <Menu title={"Maze & Patterns"}
                  itemList={["Random Wall", "Recursive Division"]}
            />
        </div>
    );
};

export default Header;