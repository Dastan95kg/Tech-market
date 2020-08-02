import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutUs from './AboutUs';
import { getAboutUsInfo } from './reducer';

class AboutUsContainer extends Component {
    componentDidMount() {
        this.props.getAboutUsInfo();
    }

    render() {
        return (
            <AboutUs {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    aboutUs: state.aboutUs.aboutUs
});

export default connect(mapStateToProps, { getAboutUsInfo })(AboutUsContainer);
