import React from "react"
import "./nguoidung.scss";
import CTimKiem from "./TimKiem/TimKiem";
import CButton from "../../../../components/Button/Button";
import CTable from "./Table/Table";
const NguoiDung = () => {
    return (
        <div className="nguoidung">
            <div className="nguoidung__tieude">
                <h2>Danh sách người dùng</h2>
            </div>
            <div className="nguoidung__chucnang">
                <div className="nguoidung__chucnang__timkiem">
                    <CTimKiem />
                </div>
                <div className="nguoidung__chucnang__them">
                    <CButton className="btn--sm" content="+ Thêm" />
                </div>
            </div>
            <div className="nguoidung__table">
                <CTable />
            </div>
        </div>
    )
}
export default NguoiDung