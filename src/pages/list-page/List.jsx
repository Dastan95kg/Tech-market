import React from 'react';
import { Select, Pagination } from 'semantic-ui-react';
import GoodCart from '../home-page/GoodCart';
import FilterContainer from '../filter/FilterContainer';
// import arrow from '../../assets/images/list-arrow.png';
import filterBtn from '../../assets/images/filter.png';
import './List.scss';

const List = (props) => {
    const {
        match,
        products: { products },
        products: productsObj,
        addProductToCart,
        categories,
        subcategories,
        cart,
        sortingByField
    } = props;
    const title = [...categories, ...subcategories].find(item => item._id === match.params.category);

    const options = [
        { key: '1', value: { field: 'default', sorting: 1 }, text: 'По умолчанию' },
        { key: '2', value: { field: 'price', sorting: -1 }, text: 'По возрастанию цены' },
        { key: '3', value: { field: 'price', sorting: 1 }, text: 'По убыванию цены' },
        { key: '4', value: { field: 'orders_count', sorting: -1 }, text: 'По популярности' },
        { key: '5', value: { field: 'name', sorting: -1 }, text: 'По алфавиту А-Я' },
        { key: '6', value: { field: 'name', sorting: 1 }, text: 'По алфавиту Я-А' }
    ];

    const getValue = (event, { value }) => {
        const name = categories.map(item => item._id)
            .includes(match.params.category) ? 'category' : 'subcategory';
        sortingByField(value, match.params.category, name);
    };

    return (
        <section className="list">
            <div className="list__content">
                <div className="list__content-filterContainer">
                    <div className="list__content-categories">
                        <div className="list__content-category">{title && title.name}</div>
                        {/* <img src={arrow} alt="arrow" className="list__content-arrow" />
                        <div className="list__content-subcategory">Смартфоны</div> */}
                    </div>
                    <div className="list__content-sort">
                        <span className="list__content-sort-title">Сортировка</span>
                        <Select placeholder="По умолчанию" options={options} onChange={getValue} />
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
                        {products && products.map(product => (
                            <GoodCart
                                {...product}
                                key={product._id}
                                addProductToCart={addProductToCart}
                                cart={cart}
                            />
                        ))}
                    </div>
                    {subcategories && subcategories.map(item => item._id)
                        .includes(match.params.category) && (
                            <FilterContainer
                                subcategory={subcategories.find(item => item._id === match.params.category)}
                            />
                        )}
                </div>
                <div className="list__content-pagination">
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={productsObj.total_pages}
                    />
                </div>
            </div>
        </section>
    );
};

export default List;