import React, { useState } from 'react';
import { Modal, Button } from 'semantic-ui-react';
import remove from '../../assets/images/close.png';
import './FinalPrice.scss';

const FinalPrice = (props) => {
    const {
        removeProduct,
        productId,
        price,
        cartItem,
        name
    } = props;

    const [isOpen, setOpen] = useState(false);

    const handleRemove = () => {
        removeProduct(productId);
        setOpen(false);
    };

    return (
        <div className="basket__content-item-price">
            <button type="button" onClick={() => setOpen(true)}>
                <img src={remove} alt="remove icon" />
            </button>
            <div className="basket__content-item-final">
                <span>{cartItem && price * cartItem.quantity}</span>
                сом
            </div>
            <Modal
                size="tiny"
                open={isOpen}
            >
                <Modal.Header>Удаление товара</Modal.Header>
                <Modal.Content>
                    <p>
                        {`Вы действительно хотите удалить "${name}" из корзины`}
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => setOpen(false)}>
                        Нет
                    </Button>
                    <Button positive onClick={handleRemove}>
                        Да
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
};

export default FinalPrice;