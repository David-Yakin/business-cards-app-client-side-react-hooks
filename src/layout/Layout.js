import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './ footer/Footer';

const Layout = ({ children }) => (
    <>
        <Header />
        <ToastContainer />
        <Main>{children}</Main>
        <Footer />
    </>
    );

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
