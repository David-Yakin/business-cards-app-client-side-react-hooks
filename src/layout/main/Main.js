import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => (
    <div style={{ minHeight: '85vh' }}>
        { children }
    </div>
    );

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
