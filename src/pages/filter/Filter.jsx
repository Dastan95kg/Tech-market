import React, { useState } from 'react';
import { useFormik } from 'formik';
import PriceRunner from '../list-page/PriceRunner';
import downArrow from '../../assets/images/dowт-arrow.png';
import upArrow from '../../assets/images/up-arrow.png';
import './Filter.scss';
import FilterItem from './FilterItem';

const Filter = (props) => {
    const {
        subcategory: { features },
        subcategory,
        toggleCheckboxes,
        filters,
        products,
        filterProducts
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
            className="list__content-filters"
            onSubmit={formik.handleSubmit}
        >
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
            >
                Применить
            </button>
        </form>
    );
};

export default Filter;