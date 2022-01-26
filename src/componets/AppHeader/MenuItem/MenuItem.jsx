import React from 'react';
import './menuitem.scss';
const CMenuItem = (props) => {
    const { active, icon, title } = props;
    return (
        <li className={"menuitem " + (active)}>
            <div className="menuitem__icon">
                {icon}
            </div>
            <div className="menuitem__title">
                <p>{title}</p>
            </div>
        </li>
    )
}
export default CMenuItem;