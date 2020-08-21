import React, { useState } from 'react';
import { useFormik } from 'formik';
import PriceRunner from '../list-page/PriceRunner';
import FilterItem from './FilterItem';
import downArrow from '../../assets/images/dowт-arrow.png';
import upArrow from '../../assets/images/up-arrow.png';
import './Filter.scss';

const Filter = (props) => {
    const {
        subcategory: { features },
        subcategory,
        toggleCheckboxes,
        filters,
        products,
        filterProducts,
        filtersShown,
        setFiltersOn
    } = props;

    const [filterOn, setFilterOn] = useState(true);

    const pricesList = products && products.map(product => product.price);
    const minPrice = pricesList && Math.min(...pricesList);
    const maxPrice = pricesList && Math.max(...pricesList);
    const [value, setValue] = React.useState([minPrice, maxPrice]);

    const formik = useFormik({
        initialValues: {
            page: 1
        },
        onSubmit: values => {
            const body = {
                ...values,
                filters,
                subcategory: subcategory._id,
                low_price: value[0],
                high_price: value[1]
            };
            filterProducts(body);
        }
    });

    return (
        <form
            className={filtersShown ? 'list__content-filters show' : 'list__content-filters'}
            onSubmit={formik.handleSubmit}
        >
            {filtersShown && (
                <div className="list__content-filters-close-wrapper">
                    <div>Фильтровать по:</div>
                    <button
                        type="button"
                        className="list__content-filters-close"
                        onClick={() => setFiltersOn(false)}
                    >
                        <svg viewBox="0 0 492 492">
                            <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
                                L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
                                c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
                                c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
                                c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"
                            />
                        </svg>
                    </button>
                </div>
            )}
            {features && Object.keys(features)
                .filter(key => features[key].length > 0)
                .map(key => (
                    <FilterItem
                        key={key}
                        title={key}
                        checkboxes={features[key]}
                        toggleCheckboxes={toggleCheckboxes}
                    />
                ))}
            <div className="list__content-filter">
                <div className="list__content-filters-label">
                    <span>Цена</span>
                    <button
                        type="button"
                        className="list__content-filters-label-btn"
                        onClick={() => setFilterOn(!filterOn)}
                    >
                        {filterOn
                            ? <img src={downArrow} alt="down arrow" />
                            : <img src={upArrow} alt="up arrow" />}
                    </button>
                </div>
                {filterOn && (
                    <PriceRunner
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        value={value}
                        setValue={setValue}
                    />
                )}
            </div>
            <button
                className="list__content-filters-btn"
                type="submit"
                onClick={() => setFiltersOn(false)}
            >
                Применить
            </button>
        </form>
    );
};

export default Filter;