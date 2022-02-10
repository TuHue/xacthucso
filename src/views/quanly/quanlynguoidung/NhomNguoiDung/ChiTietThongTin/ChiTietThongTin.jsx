import React, {useState} from 'react';
import { Modal, Button, Form, Select, Table } from "antd";
import "./chitietthongtin.scss";

function ChiTietThongTin(props) {
    const [openModal, setOpenModal] = useState(props.openModalChiTiet);
    const handleCancel = () => {
      setOpenModal(false);
    };
    const handleOk = () => {
      setOpenModal(false);
    };
    const columns = [
      { title: "STT", dataIndex: "stt", key: "stt", width: 33 },
      { title: "Tên đăng nhập", dataIndex: "tendangnhap", key: "tendangnhap", width: 186 },
      { title: "Tên đầy đủ", dataIndex: "tendaydu", key: "tendaydu", width: 195 },
      { title: "Trạng thái", dataIndex: "trangthai", key: "trangthai", width: 183 },
    ];

    const data = [];
    for (let i = 0; i < 2; ++i) {
      data.push({
        key: i,
        stt: 1,
        tendangnhap: "thanhdc3",
        tendaydu: "Đỗ Công Thành",
        trangthai: "Đang hoạt động"
      });
    }

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
      <div className='tablethongtin'>
      <div className='tablethongtin__title'>
      <h3 className='tablethongtin__title__name'>THÔNG TIN NHÓM NGƯỜI DÙNG</h3>
      <Button className="tablethongtin__title__button"> Sửa </Button>
      </div>
      
         <Table
            // title={'THÔNG TIN NHÓM NGƯỜI DÙNG'}
            className="components-table-demo-nested"
            columns={columns}
            dataSource={data}
            pagination={false}
          />
          </div> 
      </Modal>
  );
}

export default ChiTietThongTin;
