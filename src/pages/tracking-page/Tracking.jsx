import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import SearchForm from '../search-page/SearchForm';
import TrackingResult from './TrackingResult';
import searchSVG from '../../assets/search-black.svg';
import './Tracking.scss';

const Tracking = ({ findTrackingCode, orderStatus }) => {
    const statuses = [
        { id: 1, name: 'В обработке', description: 'Заказ в обработке' },
        { id: 2, name: 'Принято', description: 'Заказ принят' },
        { id: 3, name: 'У курьера', description: 'Заказ передан курьеру' },
        { id: 4, name: 'Доставлено', description: 'Заказ доставлен' },
        { id: 5, name: 'Отмена', description: 'Заказ отменен' }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (e, data) => {
        const { index } = data;
        const newIndex = activeIndex === index ? -1 : index;
        setActiveIndex(newIndex);
    };

    return (
        <section className="tracking">
            <div className="tracking__content">
                <div className="tracking__search">
                    <div className="tracking__search-title">Отслеживание товара</div>
                    <SearchForm placeholder="Введите номер заказа" findTrackingCode={findTrackingCode} />
                    <h5 className="tracking__search-header">Статусы заказов:</h5>
                    <Accordion styled>
                        {statuses.map(status => (
                            <React.Fragment key={status.id}>
                                <Accordion.Title
                                    active={activeIndex === status.id}
                                    index={status.id}
                                    onClick={handleClick}
                                >
                                    <Icon name="dropdown" />
                                    {status.name}
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === status.id}>
                                    <p>
                                        {status.description}
                                    </p>
                                </Accordion.Content>
                            </React.Fragment>
                        ))}
                    </Accordion>
                </div>
                <div className="tracking__results">
                    {orderStatus
                        ? <TrackingResult orderStatus={orderStatus} />
                        : (
                            <>
                                <div className="tracking__results-code">
                                    <img src={searchSVG} alt="search icon" />
                                </div>
                                <div className="tracking__results-content">
                                    Здесь отобразится результат поиска
                                </div>
                            </>
                        )}
                </div>
            </div>
        </section>
    );
};

export default Tracking;