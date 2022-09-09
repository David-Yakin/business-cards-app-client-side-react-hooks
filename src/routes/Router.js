import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "../cards/CardsPage";
import SignupPage from "../user/signup/SignupPage";

const Router = () => (
    <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<CardsPage />} />
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

Router.propTypes = {};

export default Router;
