import React from 'react';
import { useFormik } from 'formik';
import { Select, Input } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

const HeaderSearch = ({ findProducts, redirect }) => {
    const options = [
        { key: 'all', text: 'По всем категориям', value: 'all' }
    ];

    const formik = useFormik({
        initialValues: {
            keyword: ''
        },
        onSubmit: values => {
            if (values.keyword.trim() !== '') {
                findProducts(values);
            }
        }
    });

    return (
        <form className="search-form" onSubmit={formik.handleSubmit}>
            <div className="search-container">
                <Input
                    type="text"
                    name="keyword"
                    onChange={formik.handleChange}
                    placeholder="Поиск..."
                    action
                    focus
                >
                    <input className="search-field" />
                    <Select compact options={options} defaultValue="all" />
                </Input>
            </div>
            <button
                className="searchSvg"
                type="submit"
            >
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" xmlSpace="preserve" width="512px" height="512px">
                    <path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667    S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732    c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667    c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z" dataoriginal="#000000" className="active-path" dataoldcolor="#000000" fill="#FFFFFF" />
                </svg>
            </button>
            {redirect && <Redirect to="/search" />}
        </form>
    );
};

export default HeaderSearch;