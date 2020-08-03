import React from 'react';

const Characteristics = ({ features }) => {
    return (
        <>
            {features && Object.keys(features).map(key => {
                return features[key].trim() !== '' && (
                    <div className="detail__info-content-item">
                        <span className="detail__info-content-label">{`${key}:`}</span>
                        <p className="detail__info-content-value">{features[key]}</p>
                    </div>
                );
            })}
        </>
    );
};

export default Characteristics;