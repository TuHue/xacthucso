import React from 'react';
import CButton from "../../../../../components/Button/Button";

const CTimKiem = () => {
    return (
        <div className="timkiem">
            <div className="timkiem__select">
                <select name="cars" id="cars">
                    <option disabled>Chọn các trường thông tin</option>
                    <option>Tên đăng nhập</option>
                    <option>Tên đầy đủ</option>
                    <option>Loại người dùng</option>
                    <option>Nhóm người dùng</option>
                    <option>Người tạo</option>
                    <option>Trạng thái</option>
                </select>
            </div>
            <div className="timkiem__input">
                <input type="text" />
            </div>
            <CButton className="btn--lg" content="Tìm kiếm"/>
        </div>
    )
}
export default CTimKiem;