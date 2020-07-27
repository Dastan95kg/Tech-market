import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { getAllProducts } from './pages/list-page/reducer';

class AppContainer extends Component {
    componentDidMount() {
        this.props.getAllProducts();
    }

    render() {
        return (
            <App {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.list.products
});

export default connect(mapStateToProps, { getAllProducts })(AppContainer);