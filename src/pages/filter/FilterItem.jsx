import React, { useState } from 'react';
import { Checkbox } from 'semantic-ui-react';
import downArrow from '../../assets/images/dowт-arrow.png';
import upArrow from '../../assets/images/up-arrow.png';

const FilterItem = ({
    title, checkboxes, toggleCheckboxes
}) => {
    const [filterOn, setFilterOn] = useState(true);

    return (
        <div className="list__content-filter">
            <div className="list__content-filters-label">
                <span>{title}</span>
                <button
                    type="button"
                    className="list__content-filters-label-btn"
                    onClick={() => setFilterOn(!filterOn)}
                >
                    <img
                        src={filterOn ? downArrow : upArrow}
                        alt="hide icon"
                    />
                </button>
            </div>
            <div className="list__content-filters-checkboxes">
                {filterOn && checkboxes.map(checkbox => (
                    <Checkbox
                        label={checkbox}
                        name={checkbox}
                        onChange={() => toggleCheckboxes({ title, value: checkbox })}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilterItem;