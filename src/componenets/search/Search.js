import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSearch, placeholder, initialSearchTerm }) => {
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

    const handleChange = (e) => {
        e.preventDefault();

        const newSearchTerm = e.target.value;

        setSearchTerm(newSearchTerm);
        onSearch(newSearchTerm);
    };

    return (
        <div id="search-bar">
            <div className="d-flex flex-row-reverse">
                <div className="col-12">
                    <input
                      type="search"
                      className=" text-rtl form-control form-control-lg"
                      placeholder={placeholder}
                      onInput={handleChange}
                      value={searchTerm}
                    />
                </div>
            </div>
        </div>
    );
};

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    initialSearchTerm: PropTypes.string,
};

Search.defaultProps = {
    placeholder: 'Search...',
    initialSearchTerm: '',
};

export default Search;
