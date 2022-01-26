import React from 'react';
import { AppSidebar, AppHeader, AppContent, } from '../componets/index';

const DefaultLayout = () => {
    return (
        <div className='defaultlayout'>
            <div className='defaultlayout__sidebar'>
                <AppSidebar />
            </div>
            <div className='defaultlayout__main'>
                <div className='defaultlayout__main__header'>
                    <AppHeader />
                </div>
                <div className='defaultlayout__main__content'>
                    <AppContent />
                </div>
            </div>
        </div>
    )
}
export default DefaultLayout;