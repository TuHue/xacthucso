import React, {useState} from 'react';
import { Modal, Button, Form, Select, Switch, Table } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import "./phanquyen.scss";

function PhanQuyen(props) {
    const [openModal, setOpenModal] = useState(props.openModalPhanQuyen);
    const handleCancel = () => {
      setOpenModal(false);
    };
    const handleOk = () => {
      setOpenModal(false);
    };

    const columns = [
      { title: "Chức năng", dataIndex: "chucnang", key: "chucnang", width: 242 },
      { title: "", dataIndex: "check", key: "check", width: 53 },
      { title: "Tính năng", dataIndex: "tinhnang", key: "tinhnang", width: 348 },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        chucnang: "Quản lý người dùng",
        check: (
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
        ),
        tinhnang: "",
      });
    }

    const expandedRowRender = () => {
      const columns = [
        { title: "", dataIndex: "date", key: "date", width: 242 },
        { title: "", dataIndex: "name", key: "name", width: 53 },
        { title: "", dataIndex: "upgradeNum", key: "upgradeNum", width: 348 },
      ];
  
      const data = [];
      for (let i = 0; i < 2; ++i) {
        data.push({
          key: i,
          date: "Người dùng",
          name: (
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          ),
          upgradeNum: (
            <>
              <ul>
                <li>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />{" "}
                  Thêm mới người dùng
                </li>
                <li>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />{" "}
                  Sửa thông tin người dùng
                </li>
                <li>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />{" "}
                  Khôi phục mật khẩu người dùng
                </li>
                <li>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />{" "}
                  Khóa/ Mở khóa người dùng
                </li>
              </ul>
            </>
          ),
        });
      }
      return <Table columns={columns} dataSource={data} pagination={false} 
       />;
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
      <div >
         <Table
            className="components-table-demo-nested"
            columns={columns}
            expandable={{ expandedRowRender }}
            dataSource={data}
            pagination={false}
          />
          </div>
      </Modal>
  );
}

export default PhanQuyen;
