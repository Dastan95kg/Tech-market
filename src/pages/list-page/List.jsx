import React from 'react';
import { Select, Pagination } from 'semantic-ui-react';
import GoodCart from '../home-page/GoodCart';
import Filter from '../filter/Filter';
import arrow from '../../assets/images/list-arrow.png';
import filterBtn from '../../assets/images/filter.png';
import './List.scss';

const List = (props) => {
    const {
        match,
        products,
        addProductToCart,
        categories,
        cart
    } = props;
    const categoriesId = categories && categories.map(category => category._id);
    const categoryName = categories && categories.find(category => category._id === match.params.category).name;

    const options = [
        { key: 'af', value: 'af', text: 'По умолчанию' },
        { key: 'ax', value: 'ax', text: 'По алфавиту А-Я' },
        { key: 'ay', value: 'ay', text: 'По алфавиту Я-А' },
        { key: 'az', value: 'az', text: 'По возрастанию цены' },
        { key: 'ac', value: 'ac', text: 'По убыванию цены' }
    ];

    return (
        <section className="list">
            <div className="list__content">
                <div className="list__content-filterContainer">
                    <div className="list__content-categories">
                        <div className="list__content-category">{categoryName}</div>
                        {/* <img src={arrow} alt="arrow" className="list__content-arrow" />
                        <div className="list__content-subcategory">Смартфоны</div> */}
                    </div>
                    <div className="list__content-sort">
                        <span className="list__content-sort-title">Сортировка</span>
                        <Select placeholder="По умолчанию" options={options} />
                    </div>
                    <div className="list__content-adaptiveFilter">
                        <button type="button">
                            Фильтрация
                            <img src={filterBtn} alt="filter" />
                        </button>
                    </div>
                    <div className="list__content-pages">
                        Выводить результаты по
                        <input type="number" value="12" />
                        на страницу
                    </div>
                    <div className="list__content-results">
                        Показано
                        <span>12344</span>
                        результатов
                    </div>
                </div>
                <div className="list__content-products-wrapper">
                    <div className="list__content-products">
                        {categoriesId && categoriesId.map(categoryId => (
                            match.params.category === categoryId && (
                                products && products.filter(product => product.category === categoryId)
                                    .map(product => (
                                        <GoodCart
                                            {...product}
                                            key={product._id}
                                            addProductToCart={addProductToCart}
                                            cart={cart}
                                        />
                                    ))
                            )
                        ))}
                    </div>
                    <Filter />
                </div>
                <div className="list__content-pagination">
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                    />
                </div>
            </div>
        </section>
    );
};

export default List;