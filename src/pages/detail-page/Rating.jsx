import React from 'react';
import { Rating } from 'semantic-ui-react';

const RatingComponent = ({ field: { name, rating }, form: { setFieldValue } }) => {
    return (
        <Rating
            maxRating={5}
            rating={rating}
            onRate={val => setFieldValue(val)}
        />
    );
};

export default RatingComponent;