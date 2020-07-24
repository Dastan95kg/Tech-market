import { connect } from 'react-redux';
import Burger from './Burger';

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories
    };
};

export default connect(mapStateToProps, {})(Burger);