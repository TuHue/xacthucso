import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/img/logo/logoXTS-removebg-preview 1.png";
import "./apppsidebar.scss";

const AppSidebar = () => {
    return (
        <div className="apppsidebar">
            <div className="apppsidebar__container">
                <img className="apppsidebar__container__img" src={logo} alt="" />
                <div className="apppsidebar__container__line"></div>
            </div>
            <div className="apppsidebar__icons">
                <GiHamburgerMenu />
            </div>
        </div>
    )
}
export default AppSidebar;