import React from "react"

const DangNhap =()=>{
        const [open, setOpen] = useState(false);
        const handleButtonModal = () => {
            setOpen(!open);
        };
        return (
            <>
                <button onClick={handleButtonModal}>Đăng nhập</button>
                <Modal
                    isOpen={open}
                    shouldCloseOnOverlayClick={!open}
                    className="modal-style">
                    <div className="modal-page">
                        <div className="modal-header">
                            <img src={logo} width="165" height="98" alt="" />
                            
                            <h2>Chào mừng bạn đến với Xác Thực Số!</h2>
                        </div>
                        <form action="">
                            <div className="content">
                                <Input type={'text'} name={'username'} placeholder={'Nhập tài khoản'} display_label={true} children_label={'Tài khoản'} />
                                <Input type={'password'} name={'password'} placeholder={'Nhập mật khẩu'} display_label={true} children_label={'Mật khẩu'} />
                                <div className="modal-check">
                                <Switch defaultChecked />
                                    <span className="modal-member">Duy trì đănh nhập</span>
                                </div>
                                <div className="modal-btn">
                                    <Button className="modal-btn-login" children={'ĐĂNG NHẬP'} />
                                    <span className="modal-member">Bạn không nhớ mật khẩu? <Link to="/" className="modal-link">Khôi phục</Link></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            </>
        );
}
export default DangNhap;