import './Header.css';

const Header = ({ startVisualise, isVisualising }) => {

    const handleClick = () => {
        if (!isVisualising) {
            startVisualise();
        }
    }

    return (
        <div className="header">
            <div onClick={() => handleClick()} className={`vis-button ${isVisualising ? "disabled" : ""}`}>
                Visualise !
            </div>
        </div>
    );
};

export default Header;