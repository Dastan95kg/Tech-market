import React from 'react';
import {
    Loader
} from 'semantic-ui-react';

const Preloader = () => {
    return (
        <Loader
            active
            inline="centered"
            size="big"
        />
    );
};

export default Preloader;