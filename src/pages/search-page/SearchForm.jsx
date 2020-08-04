import React from 'react';
import { useFormik } from 'formik';
import searchIcon from '../../assets/images/IconSearch.png';
import './SearchForm.scss';

const SearchForm = ({ placeholder, findTrackingCode }) => {
    const formik = useFormik({
        initialValues: {
            searchValue: ''
        },
        onSubmit: values => {
            findTrackingCode(values.searchValue);
        }
    });

    return (
        <form
            className="search__content-navbar-form"
            onSubmit={formik.handleSubmit}
        >
            <input
                type="text"
                placeholder={placeholder}
                onChange={formik.handleChange}
                name="searchValue"
            />
            <button type="submit">
                <img src={searchIcon} alt="search icon" />
            </button>
        </form>
    );
};

export default SearchForm;