import React, {useState} from 'react';
import { Modal, Button, Form, Select, Input } from "antd";

function PhanQuyen(props) {
    const [openModal, setOpenModal] = useState(props.openModalPhanQuyen);
    const handleCancel = () => {
      setOpenModal(false);
    };
    const handleOk = () => {
      setOpenModal(false);
    };
  return (
    <div className='modalphanquyen'>
         <Modal
        // className="modalthemmoi"
        visible={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        title=" PHÂN QUYỀN CHỨC NĂNG"
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
            className="modalthemmoi__button"
          >
            Thoát
          </Button>
        ]}
      >
        
      </Modal>
    </div>
  );
}

export default PhanQuyen;
