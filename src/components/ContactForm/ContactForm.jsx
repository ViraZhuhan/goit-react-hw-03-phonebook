import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  FormEl,
  Label,
  Input,
  AddButton,
  FormError,
} from './ContactForm.styled';

class ContactForm extends Component {
  initialValues = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  userSchema = object({
    name: string()
      .matches(
        /^[A-z-А-я\s]+$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required(),
    number: string()
      .matches(
        /^[0-9-{3}0-9-{2}0-9-{2}]+$/,
        'Phone number must contain 8 number and must be digits'
      )
      .required(),
  });


 


 handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

    render() {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.userSchema}
        onSubmit={this.handleSubmit}
      >
        <FormEl autoComplete="off">
          <Label htmlFor={this.nameInputId}></Label>
          Name
          <Input
            type="text"
            name="name"
            placeholder="name"
            id={this.nameInputId}
          />
          <FormError name="name" />
          <Label htmlFor={this.numberInputId}></Label>
          Number
          <Input
            type="tel"
            name="number"
            placeholder="111-22-33"
            id={this.numberInputId}
          />
          <FormError name="number" />
          <AddButton type="submit">Add contact</AddButton>
        </FormEl>
      </Formik>
    );
  }
}

export default ContactForm;
