import { MdHomeFilled } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import {HiMenuAlt2} from "react-icons/hi";
import {BiGroup} from "react-icons/bi"
import {MdOutlineAccountBox} from "react-icons/md";
import {MdAttachMoney} from "react-icons/md";
import {CgNotes} from "react-icons/cg";
const constmenus = [
  {
    id: 1,
    title: "Tổng quan",
    path: "",
    icon: <MdHomeFilled  />,
    children: [],
    active: false,
    width:"158px"
  },
  {
    id: 2,
    title: "Khách hàng",
    path: "",
    icon: <FaUser />,
    children: [],
    active: false,
    width:"142px"
  },
  {
    id: 3,
    title: "Gói dịch vụ",
    path: "",
    icon: <CgNotes />,
    children: [],
    active: false,
    width:"153px"

  },
  {
    id: 4,
    title: "Thanh Toán",
    path: "",
    icon: <MdAttachMoney/>,
    children: [],
    active: false,
    width:"150px"

  },
  {
    id: 5,
    title: "Quản trị viên",
    path: "",
    icon: <MdOutlineAccountBox />,
    children: [],
    active: true,
    width:"162px"
  },
  {
    id: 6,
    title: "Cộng tác viên",
    path: "",
    icon: <BiGroup />,
    children: [],
    active: false,
    width:"165px"
  },
  {
    id: 7,
    title: "Quản lý tin tức",
    path: "",
    icon: <HiMenuAlt2/>,
    children: [],
    active: false,
    width:"173px"
  },
  {
    id: 8,
    title: "Thuộc tính sản phẩm",
    path: "",
    icon: <FaUser />,
    children: [],
    active: false,
    width:"224px"

  },
  {
    id: 9,
    title: "Thư viện giao diện",
    path: "",
    icon: <FaUser />,
    children: [],
    active: false,
    width:"214px"
  },
];

export default constmenus;
