
import React from 'react';
import CActionItem from './ActionItem/ActionItem';
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { AiTwotoneSetting } from 'react-icons/ai';
import { RiAccountCircleFill } from "react-icons/ri";
import './action.scss';
const CAction = () => {
    return (
        <div className="action">
            <div className="action__item action__notification">
                <CActionItem icon={<IoMdNotifications size={30} />} number={6}  />
            </div>
            <div className="action__item action__email">
                <CActionItem icon={<MdOutlineMail size={30} />} number={3} />
            </div>
            <div className="action__item action__infor">
                <div className="action__infor__icon">
                    <RiAccountCircleFill  size={24} />
                </div>
                <div className="action__infor__text">
                Supper admin
                </div>
            </div>
            <div className="action__setting">
                <AiTwotoneSetting   size={30} />
            </div>
        </div>
    )
}

export default CAction;