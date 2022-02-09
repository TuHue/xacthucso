import React, {useState} from 'react';
import { Modal, Button, Form, Select, Input } from "antd";
import "./chitietthongtin.scss";

function ChiTietThongTin(props) {
    const [openModal, setOpenModal] = useState(props.openModalChiTiet);
    const handleCancel = () => {
      setOpenModal(false);
    };
    const handleOk = () => {
      setOpenModal(false);
    };
  return (
         <Modal
        // className="modalthemmoi"
        className='modalchitiet'
        visible={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        title="CHI TIẾT THÔNG TIN NHÓM NGƯỜI DÙNG"
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
            className="modalchitiet__button"
          >
            Thoát
          </Button>
        ]}
      >
        
      </Modal>
  );
}

export default ChiTietThongTin;
