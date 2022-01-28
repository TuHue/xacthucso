import React from 'react';
import './input.scss';
import { AiFillQuestionCircle } from 'react-icons/ai';


const Input = (props) => {
    console.log(props);
    return (
        <div className="componentinput">
            {props.display_label && <label htmlFor={props.name}>{props.children_label} <AiFillQuestionCircle className="componentinput__icon" /></label>}
            <input type={props.type} name={props.name} placeholder={props.placeholder} className="componentinput__input"/>
        </div>
    );
}

export default Input;
