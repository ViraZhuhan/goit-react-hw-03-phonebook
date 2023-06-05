import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Label, Input, AddButton } from './ContactForm.styled';

class ContactForm extends Component {
  
    static defaultProps = {
        name: '',
        number: '',
      };
    
      static propTypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      };
    
      state = {
        name: this.props.name,
        number: this.props.number,
    
      };

      nameInputId = nanoid();
      numberInputId = nanoid();
  

  handleChange = evt => {
    const {name, value} = evt.currentTarget;
    this.setState({ 
        [name]: value,
     });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state)
    this.reset();
  }

  reset = () => {
    this.setState({name: '',
    number: ''})
  }

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}></Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        <Label htmlFor={this.numberInputId}></Label>
            Number 
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    );
  }
}

export default ContactForm;
