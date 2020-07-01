import React from 'react';
import searchIcon from '../../assets/images/IconSearch.png';
import './SearchForm.scss';

const SearchForm = ({ placeholder }) => {
    return (
        <form className="search__content-navbar-form">
            <input type="text" placeholder={placeholder} />
            <button type="submit">
                <img src={searchIcon} alt="search icon" />
            </button>
        </form>
    );
};

export default SearchForm;