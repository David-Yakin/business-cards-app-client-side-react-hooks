import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import SignupPage from '../pages/signup/SignupPage';

const BCRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} />
            <Route path="/biz-signup" element={<BizSignup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/my-cards" element={<MyCards />} />
            <Route path="/create-card" element={<CreateCard />} />
            <Route path="/my-fav-cards" element={<MyFavoriteCards />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<Error404 />} /> */}
    </Routes>
);

BCRoutes.propTypes = {};

export default BCRoutes;
