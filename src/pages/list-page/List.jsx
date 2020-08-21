import React, { useState } from 'react';
import { Select, Pagination } from 'semantic-ui-react';
import GoodCart from '../home-page/GoodCart';
import FilterContainer from '../filter/FilterContainer';
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
        sortingByField,
        getAllCategoryProducts,
        getAllSubcategoryProducts
    } = props;
    const title = [...categories, ...subcategories].find(item => item._id === match.params.category);

    const [isFiltersOn, setFiltersOn] = useState(false);

    const productsPerPageFromLocalStorage = (JSON.parse(localStorage.getItem('productsPerPage'))) || 4;
    const [productsPerPage, setProductsPerPage] = useState(productsPerPageFromLocalStorage);

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

    const handleProductsPerPage = () => {
        localStorage.setItem('productsPerPage', JSON.stringify(productsPerPage));
        getAllCategoryProducts(match.params.category, 1, productsPerPage);
    };

    const handlePageChange = (value, page) => {
        if (categories && categories.map(item => item._id)
            .includes(match.params.category)) {
            getAllCategoryProducts(match.params.category, page.activePage, productsPerPage);
        } else {
            getAllSubcategoryProducts(match.params.category, page.activePage);
        }
    };

    return (
        <section className="list">
            <div className="list__content">
                <div className="list__content-filterContainer">
                    <div className="list__content-categories">
                        <div className="list__content-category">{title && title.name}</div>
                    </div>
                    <div className="list__content-sort">
                        <span className="list__content-sort-title">Сортировка</span>
                        <Select
                            placeholder="По умолчанию"
                            options={options}
                            onChange={getValue}
                        />
                    </div>
                    {subcategories && subcategories
                        .map(item => item._id)
                        .includes(match.params.category) && (
                            <div className="list__content-adaptiveFilter">
                                <button
                                    type="button"
                                    onClick={() => setFiltersOn(!isFiltersOn)}
                                >
                                    Фильтрация
                                    <svg viewBox="0 0 373.6 373.6">
                                        <path d="M343.7,0H29.9c-5.5,0-10.1,4.9-10.1,10.5v64.2c0,0.3,0,0.6,0.1,1c0,0.1,0.1,0.3,0.1,0.4c0,0.2,0.1,0.3,0.1,0.5
                                            c0,0.2,0.1,0.3,0.1,0.5c0,0.1,0.1,0.3,0.1,0.4c0.1,0.2,0.1,0.4,0.2,0.5c0,0.1,0.1,0.2,0.1,0.4c0.1,0.2,0.1,0.3,0.2,0.5
                                            c0.1,0.1,0.1,0.2,0.2,0.4c0.1,0.2,0.2,0.3,0.2,0.4c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.3,0.3,0.4c0.1,0.1,0.2,0.3,0.3,0.4
                                            c0.1,0.1,0.2,0.2,0.3,0.4c0.1,0.1,0.2,0.1,0.2,0.2l114.3,124.6v157.5c0,3.9,2.2,7.4,5.7,9.1c1.3,0.6,2.7,0.9,4.2,0.9
                                            c2.4,0,4.7-0.8,6.5-2.4l80.2-68.3c2.2-1.9,3.5-4.7,3.4-7.6v-89.2L351,81.4c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.4
                                            c0.1-0.1,0.2-0.2,0.3-0.4c0.1-0.2,0.2-0.3,0.3-0.4s0.2-0.3,0.2-0.4c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.1-0.2,0.2-0.4
                                            c0.1-0.2,0.2-0.3,0.2-0.5c0-0.1,0.1-0.2,0.1-0.4c0.1-0.2,0.1-0.3,0.2-0.5c0-0.1,0.1-0.3,0.1-0.4c0-0.2,0.1-0.3,0.1-0.5
                                            s0.1-0.3,0.1-0.5c0-0.1,0.1-0.3,0.1-0.4c0-0.3,0.1-0.6,0.1-1V10.4C353.8,4.9,349.3,0,343.7,0z M219.5,195.6
                                            c-1.7,1.8-2.7,4.1-2.7,6.6v88.4l-60,51.3V202.2c0-2.5-1-4.8-2.7-6.6L52.6,85H321L219.5,195.6z M333.8,65h-294V20h294V65z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                    {categories && categories.map(item => item._id)
                        .includes(match.params.category) && (
                            <form
                                className="list__content-pages"
                                onSubmit={handleProductsPerPage}
                            >
                                Выводить результаты по
                                <input
                                    type="number"
                                    value={productsPerPage}
                                    onChange={event => setProductsPerPage(event.target.value)}
                                />
                                на страницу
                            </form>
                        )}
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
                                products={products}
                                filtersShown={isFiltersOn}
                                setFiltersOn={setFiltersOn}
                            />
                        )}
                </div>
                <div className="list__content-pagination">
                    <Pagination
                        boundaryRange={0}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={productsObj.total_pages}
                        onPageChange={handlePageChange}
                        activePage={productsObj.current_page}
                    />
                </div>
            </div>
        </section>
    );
};

export default List;