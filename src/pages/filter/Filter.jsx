import React, { useState } from 'react';
import PriceRunner from '../list-page/PriceRunner';
import downArrow from '../../assets/images/dowт-arrow.png';
import upArrow from '../../assets/images/up-arrow.png';
import './Filter.scss';
import FilterItem from './FilterItem';

const Filter = (props) => {
    const {
        subcategory: { features },
        toggleCheckboxes
    } = props;
    const [filterOn, setFilterOn] = useState(true);

    return (
        <div className="list__content-filters">
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
                {filterOn && <PriceRunner />}
            </div>
            <button
                className="list__content-filters-btn"
                type="button"
                onClick={() => alert('ok')}
            >
                Применить
            </button>
        </div>
    );
};

export default Filter;