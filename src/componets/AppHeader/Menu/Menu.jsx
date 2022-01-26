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
                        key={menu.title}
                        active={menu.active}
                        icon={menu.icon}
                        title={menu.title}
                    />
                ))
            }
        </ul>
    )
}

export default CMenu;