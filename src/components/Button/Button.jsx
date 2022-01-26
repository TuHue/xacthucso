import React from "react";
import "./button.scss";

const CButton = (props) => {
    const { content, className } = props;
    return (
        <div className="btn">
            <button className={"btn__default " +(className)}>{content}</button>
        </div>
    )
}

export default CButton;