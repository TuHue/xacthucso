import React, { useState } from "react";
import Input from '../../../componets/Input/Input';
import Modal from 'react-modal';
import logo from '../../../assets/img/logo/logoXTS-removebg-preview 1.png';
import { Switch } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from "antd";
import './dangnhap.scss';
// import {Swtich, Button, Link} from ''

const DangNhap = () => {
    const [open, setOpen] = useState(false);
    const handleButtonModal = () => {
        setOpen(!open);
    };
    return (
        <>
            <button onClick={handleButtonModal}>Đăng nhập</button>
            <Modal
                isOpen={open}
                shouldCloseOnOverlayClick={!open}
                className="modadangnhap">
                <div className="modadangnhap__page">
                    <div className="modadangnhap__page__header">
                        <img src={logo} width="165" height="98" alt="" />

                        <h2>Chào mừng bạn đến với Xác Thực Số!</h2>
                    </div>
                    <form action="">
                        <div className="modadangnhap__page__content">
                            <Input type={'text'} name={'username'} placeholder={'Nhập tài khoản'} display_label={true} children_label={'Tài khoản'} />
                            <Input type={'password'} name={'password'} placeholder={'Nhập mật khẩu'} display_label={true} children_label={'Mật khẩu'} />
                            <div className="modadangnhap__page__content__check">
                                <Switch defaultChecked />
                                <span className="modadangnhap__page__content__check__member">Duy trì đănh nhập</span>
                            </div>
                            <div className="modadangnhap__page__content__footer">
                                {/* <Button className="modal-btn-login"     children={'ĐĂNG NHẬP'} /> */}
                                <Button className="modadangnhap__page__content__footer__btn">ĐĂNG NHẬP</Button>
                                <span className="modadangnhap__page__content__footer__member">Bạn không nhớ mật khẩu? <Link to="/" className="modadangnhap__page__content__footer__link">Khôi phục</Link></span>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}
export default DangNhap;