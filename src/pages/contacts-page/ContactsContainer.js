import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contacts from './Contacts';
import { getContacts } from './reducer';

class ContactsContainer extends Component {
    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        return (
            <Contacts contacts={this.props.contacts} />
        );
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts
});

export default connect(mapStateToProps, { getContacts })(ContactsContainer);