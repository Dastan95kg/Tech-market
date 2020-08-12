import React from 'react';
import {
    Row,
    Col,
    RangeSlider,
    InputGroup,
    InputNumber
}
    from 'rsuite';
import './PriceRunner.scss';
import 'rsuite/dist/styles/rsuite-default.css';

const PriceRunner = ({
    minPrice, maxPrice, value, setValue
}) => {
    return (
        <Row>
            <Col md={10}>
                <RangeSlider
                    progress
                    style={{ marginTop: 10 }}
                    value={value}
                    step={100}
                    onChange={val => {
                        setValue(val);
                    }}
                    min={minPrice}
                    max={maxPrice}
                />
            </Col>
            <Col md={8}>
                <InputGroup>
                    <InputNumber
                        min={0}
                        max={50000}
                        value={value[0]}
                        onChange={nextValue => {
                            const [start, end] = value;
                            if (nextValue > end) {
                                return;
                            }
                            setValue([nextValue, end]);
                        }}
                    />
                    <InputNumber
                        min={0}
                        max={50000}
                        value={value[1]}
                        onChange={nextValue => {
                            const [start, end] = value;
                            if (start > nextValue) {
                                return;
                            }
                            setValue([start, nextValue]);
                        }}
                    />
                </InputGroup>
            </Col>
        </Row>
    );
};

export default PriceRunner;