import React from 'react'

const NguoiDung = React.lazy(()=>import("./views/quanly/quanlynguoidung/NguoiDung/NguoiDung"));

const routes = [
    {path: '/quan-tri/quan-tri-nguoi-dung/nguoi-dung',name:"Người Dùng",component:NguoiDung}
]

export default routes;