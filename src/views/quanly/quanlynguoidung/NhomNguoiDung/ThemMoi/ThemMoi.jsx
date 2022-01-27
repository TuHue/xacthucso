import React, { useState } from "react";
import { Modal, Button, Form, Select, Input } from "antd";
import "./themmoi.scss";
const { Option } = Select;

function ThemMoi(props) {
  const [openModal, setOpenModal] = useState(props.openModalThemMoi);
  const handleCancel = () => {
    setOpenModal(false);
  };
  const handleOk = () => {
    setOpenModal(false);
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <div>
      <Modal
        className="modalthemmoi"
        title="Title"
        visible={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        title=" THÊM MỚI NHÓM NGƯỜI DÙNG"
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            className="modalthemmoi__button"
          >
            Xác nhận
          </Button>,
          <Button
            key="back"
            onClick={handleCancel}
            className="modalthemmoi__button"
          >
            Thoát
          </Button>,
        ]}
      >
        <div className="modalthemmoi__content">
          <Form {...layout} name="control-hooks" className="modalthemmoi__content__form">
            <Form.Item name="tenhom" label="Tên nhóm" rules={[{ required: true }]}>
              <Input className="modalthemmoi__content__form__input" placeholder="Nhập tên nhóm"/>
            </Form.Item>
            <Form.Item
            // className="modalthemmoi__content__form__select"
              name="nhomcha"
              label="Nhóm cha"
              rules={[{ required: true }]}
            >
              <Select 
                placeholder="Chọn nhóm cha"
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
             label="Mô tả"
            >
            <Input.TextArea className="modalthemmoi__content__form__textarea" placeholder="Nhập mô tả"/>
            </Form.Item>
           
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default ThemMoi;
