import React, {useState} from 'react';
import { Modal, Button, Form, Select, Input } from "antd";
import "./phanquyen.scss";

function PhanQuyen(props) {
    const [openModal, setOpenModal] = useState(props.openModalPhanQuyen);
    const handleCancel = () => {
      setOpenModal(false);
    };
    const handleOk = () => {
      setOpenModal(false);
    };
  return (
         <Modal
        // className="modalthemmoi"
        className='modalphanquyen'
        visible={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        title=" PHÂN QUYỀN CHỨC NĂNG"
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
            className="modalphanquyen__button"
          >
            Thoát
          </Button>
        ]}
      >
        
      </Modal>
  );
}

export default PhanQuyen;
