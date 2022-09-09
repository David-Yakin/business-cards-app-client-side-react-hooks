import React from 'react';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';

const Navigation = () => (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <LeftNavigation />
        <RightNavigation />
    </div>
    );

export default Navigation;
