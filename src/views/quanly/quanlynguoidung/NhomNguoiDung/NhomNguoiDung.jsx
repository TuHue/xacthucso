import React, { useState } from "react";
import { Table, Button, Input, Select } from "antd";
import ThemMoi from "./ThemMoi/ThemMoi";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import "./nhomnguoidung.scss";

const { Option } = Select;

const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    width: "30px",
  },
  {
    title: "Tên nhóm",
    dataIndex: "tennhom",
    sorter: true,
    // width: '20%',
  },
  {
    title: "Mô tả",
    dataIndex: "mota",
    sorter: true,
    // width: '20%',
  },
  {
    title: "Ngày tạo",
    dataIndex: "ngaytao",
    sorter: true,
    // width: '20%',
  },
  {
    title: "Người tạo",
    dataIndex: "nguoitao",
    sorter: true,
    // width: '20%',
  },
  {
    title: "Trạng thái",
    dataIndex: "trangthai",
    sorter: true,
    // width: '20%',
  },
  {
    title: "Chức năng",
    dataIndex: "chucnang",
    render: chucnang => <a><AiOutlineInfoCircle/>  <FiSettings/></a>
    // width: '20%',
  },
];

const data = [
  {
    key: "1",
    stt: 1,
    tennhom: "Super Admin",
    mota: "Full quyền",
    ngaytao: "08/04/2020",
    nguoitao: "Super Admin",
    trangthai: "Đang hoạt động",
    chucnang: "",
  },
  {
    key: "2",
    stt: 2,
    tennhom: "Admin",
    mota: "Tạo tài khoản, duyệt tài khoản mới, in tem...",
    ngaytao: "08/04/2020",
    nguoitao: "Super Admin",
    trangthai: "Đang hoạt động",
    chucnang: "",
  },
];

const NhomNguoiDung = () => {
  const [openModal, setOpenModal] = useState(true);
  const hanldeOpenModal = () => {
    debugger;
    setOpenModal(!openModal);
    console.log(openModal);
  };
  return (
    <div className="listgroupuser">
      <h3> DANH SÁCH NHÓM NGƯỜI DÙNG </h3>
      <div className="listgroupuser__search">
        <Select
          className="listgroupuser__search__select"
          defaultValue="Chọn trường"
          placeholder="Chọn trường thông tin"
        >
          <Option value="NhomNguoiDung"> Nhóm người dùng </Option>
          <Option value="NguoiDung"> Người dùng </Option>
        </Select>
        <Input
          className="listgroupuser__search__input"
          placeholder="Nhập giá trị"
        />
        <Button className="listgroupuser__search__button"> Tìm kiếm </Button>
      </div>
      <div className="listgroupuser__add">
        <Button
          className="listgroupuser__add__button"
          onClick={hanldeOpenModal} > + Thêm mới
        </Button>
        <ThemMoi openModalThemMoi={openModal} />
      </div>
      <Table columns={columns} dataSource={data} pagination={true} />
    </div>
  );
};
export default NhomNguoiDung;
