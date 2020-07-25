import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => ({
    cart: state.cart.cart
});

export default connect(mapStateToProps, {})(Header);