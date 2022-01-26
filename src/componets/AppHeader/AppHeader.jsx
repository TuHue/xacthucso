import React, { useState } from 'react';
import CMenu from './Menu/Menu';
import CAction from './Action/Action';
import "./appheader.scss";
import constmenus from "../../commons/constant/ContMenu";

const AppHeader = () => {



    return (
        <div className="appheader">
            <div className="appheader__menu">
                <div className="appheader__menu__parent">
                    <CMenu menus={constmenus} />
                </div>
            </div>
            <div className="appheader__actions">
                <CAction />
            </div>
        </div>
    )
}
export default AppHeader;