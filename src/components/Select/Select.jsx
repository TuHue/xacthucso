import React from 'react';
import './select.scss';

const CSelect = () => {
    return (
        <div className="select">
            <select className="select__txt">
                <option value="" disabled >Chọn các trường thông tin</option>
                <option value="">Tên đăng nhập</option>
                <option value="">Tên đầy đủ</option>
                <option value="">Loại người dùng</option>
                <option value="">Nhóm người dùng</option>
                <option value="">Người tạo</option>
                <option value="">Trạng thái</option>
            </select>
        </div>

    )
}

export default CSelect;