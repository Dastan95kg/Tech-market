import React from 'react';
import { Link } from 'react-router-dom';
import ProductQuantity from '../detail-page/ProductQuantity';
import FinalPrice from './FinalPrice';
import './BasketItem.scss';

const BasketItem = (props) => {
    const {
        name, price, photos, removeProduct, _id, increaseProductQuantity, decreaseProductQuantity,
        tempCart
    } = props;
    const cartItem = tempCart && tempCart.find(item => item.id === _id);

    return (
        <div className="basket__content-item">
            <Link to={`/detail/${_id}`} className="basket__content-item-image">
                <img src={`https://electronics-admin.herokuapp.com/${photos[0]}`} alt="basket item" />
            </Link>
            <div className="basket__content-item-details">
                <div className="basket__content-item-title">{name}</div>
                <div className="basket__content-item-detail">
                    <ProductQuantity
                        price={price}
                        id={_id}
                        increaseProductQuantity={increaseProductQuantity}
                        decreaseProductQuantity={decreaseProductQuantity}
                        cartItem={cartItem}
                    />
                    <span className="times">&times;</span>
                    <span className="price">
                        <span>{price}</span>
                        сом
                    </span>
                </div>
            </div>
            <FinalPrice
                price={price}
                removeProduct={removeProduct}
                productId={_id}
                cartItem={cartItem}
                name={name}
            />
        </div>
    );
};

export default BasketItem;