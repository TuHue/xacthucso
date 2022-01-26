import React from 'react';
import "./input.scss";
const CInput = (props) => {
    const { name, placeholder } = props;
    return (
        <div className="input">
            <input className="input__txt" type="text" name={name} placeholder={placeholder} />
        </div>

    )
}

export default CInput;