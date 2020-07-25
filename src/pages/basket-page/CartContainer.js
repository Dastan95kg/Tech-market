import { connect } from 'react-redux';
import Cart from './Cart';

const mapStateToProps = (state) => ({
    cart: state.cart.cart
});

export default connect(mapStateToProps, {})(Cart);