import React from 'react';
import {
    Dropdown, Message
} from 'semantic-ui-react';
import GoodCart from '../home-page/GoodCart';
import './Search.scss';

const Search = ({ searchProducts, cart, addProductToCart, sortProducts }) => {
    const options = [
        { key: 'af', value: 'По умолчанию', text: 'По умолчанию' },
        { key: 'ax', value: 'По алфавиту А-Я', text: 'По алфавиту А-Я' },
        { key: 'ay', value: 'По алфавиту Я-А', text: 'По алфавиту Я-А' },
        { key: 'az', value: 'По возрастанию цены', text: 'По возрастанию цены' },
        { key: 'ac', value: 'По убыванию цены', text: 'По убыванию цены' }
    ];

    return (
        <section className="search">
            <div className="search__content">
                <nav className="search__content-navbar">
                    <div className="search__content-navbar-title">Поиск</div>
                    {searchProducts && (
                        <div className="search__content-navbar-sort">
                            Сортировка
                            <Dropdown
                                search
                                selection
                                options={options}
                                onChange={(e, data) => sortProducts(data.value)}
                            />
                        </div>
                    )}
                    <div className="search__content-navbar-results">
                        {`Найдено ${searchProducts ? searchProducts.length : 0} товар/товаров`}
                    </div>
                </nav>
                <div className="search__content-wrapper">
                    <div className="search__content-products-wrapper">
                        <div className="search__content-products">
                            {searchProducts && (searchProducts.length ? searchProducts.map(product => (
                                <GoodCart
                                    key={product._id}
                                    {...product}
                                    cart={cart}
                                    addProductToCart={addProductToCart}
                                />
                            ))
                                : (
                                    <Message
                                        negative
                                        color="red"
                                        size="large"
                                    >
                                        <Message.Header>По вашему запросу ничего не найдено</Message.Header>
                                    </Message>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;