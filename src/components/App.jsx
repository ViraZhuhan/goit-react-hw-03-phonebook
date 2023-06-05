import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import ContactForm from './ContactForm';
import ContactsTitle from './ContactsTitle';
import Filter from './Filter/Filter';
import ContactsList from './ContactList';

import { Container } from './App.styled';
import { nanoid } from 'nanoid';

class App extends Component {
  static defaultProps = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ).isRequired,
    filter: PropTypes.string.isRequired,
  };

  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  formSubmitData = ({ name, number }) => {
    const isFindName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase());

    if (isFindName) {
      alert(`${name} is already in contacts !`);
      return;
    } else {
      const newContacts = {
        id: nanoid(),
        name,
        number,
      };
      this.setState(({ contacts }) => ({
        contacts: [newContacts, ...contacts],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleFilters = this.getVisibleContacts();

    return (
      <Container>
        <Title title="Phonebook"/>
        <ContactForm onSubmit={this.formSubmitData} />
        <ContactsTitle title="Contacts"/>
        <Filter onChange={this.changeFilter} value={this.state.filter} />
        <ContactsList contacts={visibleFilters} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
