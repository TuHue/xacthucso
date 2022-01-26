import React from "react";

const CButton = (props) => {
    const { content, className } = props;
    return (
        <button class={"btn " + (className)}>{content}</button>
    )
}

export default CButton;