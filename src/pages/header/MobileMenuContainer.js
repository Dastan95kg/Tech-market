import { connect } from 'react-redux';
import MobileMenu from './MobileMenu';

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
        cart: state.cart.tempCart
    };
};

export default connect(mapStateToProps, {})(MobileMenu);