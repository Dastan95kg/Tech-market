import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = (state) => ({
    cart: state.cart.tempCart
});

export default connect(mapStateToProps, null)(Main);