import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Compunents/Navbar';
import Footer from '../Compunents/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;