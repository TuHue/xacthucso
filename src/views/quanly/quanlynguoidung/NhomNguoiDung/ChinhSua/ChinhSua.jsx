import React, { useState } from 'react';
import { Modal, Button, Form, Select, Input } from "antd";
import "./chinhsua.scss";

function ChinhSua(props) {
    const [openModal, setOpenModal] = useState(props.openModalChinhSua);
    const handleCancel = () => {
        setOpenModal(false);
    };
    const handleOk = () => {
        setOpenModal(false);
    };
    return (
        <Modal
            // className="modalthemmoi"
            className='modalchinhsua'
            visible={openModal}
            onOk={handleOk}
            onCancel={handleCancel}
            title="SỬA NHÓM NGƯỜI DÙNG"
            footer={[
                <Button
                    key="submit"
                    type="primary"
                    onClick={handleOk}
                    className="modalchinhsua__button"
                >
                    Xác nhận
                </Button>,
                <Button
                    key="back"
                    onClick={handleCancel}
                    className="modalchinhsua__button"
                >
                    Thoát
                </Button>
            ]}
        >

        </Modal>
    );
}

export default ChinhSua;
