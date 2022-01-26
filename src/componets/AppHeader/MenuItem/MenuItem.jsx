import React from 'react';
import './menuitem.scss';
const CMenuItem = (props) => {
    const { active, icon, title, id, widthItem } = props;
    const flagActive = (active) ? "active" : ""
    return (
        <li className={"menuitem " + (flagActive) + " menuitem--" + (id)} style={{ width: (widthItem) }}>
            <div className={"menuitem__icon " + " menuitem__icon--" + (id)}>
                {icon}
            </div>
            <div className="menuitem__title">
                <p>{title}</p>
            </div>
        </li>
    )
}
export default CMenuItem;