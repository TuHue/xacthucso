import React, { useState } from 'react';
import CMenuItem from '../MenuItem/MenuItem';
import './menu.scss';
const CMenu = (props) => {
    const { menus } = props;
    const [menuState, setMenuState] = useState(menus);
    return (
        <ul className="menu">
            {menuState &&
                menuState.map((menu) => (
                    <CMenuItem
                        key={menu.id}
                        active={menu.active}
                        icon={menu.icon}
                        title={menu.title}
                        id={menu.id}
                        widthItem={menu.width}
                    />
                ))
            }
        </ul>
    )
}

export default CMenu;