import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import PriceRunner from '../list-page/PriceRunner';
import downArrow from '../../assets/images/dowт-arrow.png';
import './Filter.scss';

const Filter = () => {
    return (
        <div className="list__content-filters">
            <div className="list__content-filter">
                <div className="list__content-filters-label">
                    <span>Бренд</span>
                    <button type="button" className="list__content-filters-label-btn">
                        <img src={downArrow} alt="down arrow" />
                    </button>
                </div>
                <div className="list__content-filters-checkboxes">
                    <Checkbox label="Samsung" />
                    <Checkbox label="Panasonic" />
                    <Checkbox label="LG" />
                    <Checkbox label="Huawei" />
                </div>
            </div>
            <div className="list__content-filter">
                <div className="list__content-filters-label">
                    <span>Цена</span>
                    <button type="button" className="list__content-filters-label-btn">
                        <img src={downArrow} alt="down arrow" />
                    </button>
                </div>
                <PriceRunner />
            </div>
        </div>
    );
};

export default Filter;