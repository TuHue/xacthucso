import React from 'react'

const NguoiDung = React.lazy(()=>import("./views/quanly/quanlynguoidung/NguoiDung/NguoiDung"));
const NhomNguoiDung = React.lazy(()=>import("./views/quanly/quanlynguoidung/NhomNguoiDung/NhomNguoiDung"));

const routes = [
    {path: '/quan-tri/quan-tri-nguoi-dung/nguoi-dung',name:"Người Dùng",component:NguoiDung},
    {path: '/quan-tri/quan-tri-nguoi-dung/nhom-nguoi-dung',name:"Nhóm người Dùng",component:NhomNguoiDung}
]

export default routes;