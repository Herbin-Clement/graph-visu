import { useState } from "react";

const Menu = ({ title, itemList, handleClick }) => {

    const [selected, setSelected] = useState(0);

    return (
        <div className="menu">
            <div className="title">{title}</div>
            <div className="itemList">
                {
                    itemList.map((e, id) => {
                        return <div key={id} 
                            onClick={() => {
                                handleClick(id);
                                setSelected(id);
                            }}
                            style={{color: `${selected === id ? "#FFFFFF" : "#AAAAAA"}`}}
                        >{e}</div>
                    })
                }
            </div>
        </div>
    )
};

export default Menu;