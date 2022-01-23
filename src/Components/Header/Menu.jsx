const Menu = ({ title, itemList }) => {
    return (
        <div className="menu">
            <div className="title">{title}</div>
            <div className="itemList">
                {
                    itemList.map((e, id) => {
                        return <div key={id}>{e}</div>
                    })
                }
            </div>
        </div>
    )
};

export default Menu;