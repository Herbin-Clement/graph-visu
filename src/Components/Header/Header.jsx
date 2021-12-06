import './Header.css';

const Header = ({ startVisualise }) => {
    return (
        <div class="header">
            <div onClick={() => startVisualise()} class="vis-button">
                Visualise !
            </div>
        </div>
    );
};

export default Header;