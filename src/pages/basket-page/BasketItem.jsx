import React from 'react';
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
            <div className="basket__content-item-image">
                <img src={`https://electronics-admin.herokuapp.com/${photos[0]}`} alt="basket item" />
            </div>
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
            />
        </div>
    );
};

export default BasketItem;