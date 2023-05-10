import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

function Main() {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-615px)] container mx-auto px-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Main;
