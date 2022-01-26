import React from 'react';
import { CInput, CButton, CSelect } from '../../../../../components';
import './timkiem.scss';

const CTimKiem = () => {
    return (
        <div className="timkiem">
            <div className="timkiem__select">
                <CSelect />
            </div>
            <div className="timkiem__input">
                <CInput placeholder="Nhập giá trị" />
            </div>
            <CButton className="btn--lg" content="Tìm kiếm" />
        </div>
    )
}
export default CTimKiem;