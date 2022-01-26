import React from "react";
import './actionitem.scss';
const CActionItem = (props) => {
    const { icon, number } = props;
    return (
        <div className="actionitem">
            <div className="actionitem__icon">
                {icon}
            </div>
            <div className="actionitem__number">{number}</div>
        </div>
    )
}
export default CActionItem;