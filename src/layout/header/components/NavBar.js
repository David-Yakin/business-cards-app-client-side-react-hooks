import React from 'react';
import Logo from './Logo';
import BurgerButton from './BurgerButton';
import Navigation from './navigation/Navigation';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
            <Logo />
            <BurgerButton />
            <Navigation />
        </div>
    </nav>
);

export default NavBar;
