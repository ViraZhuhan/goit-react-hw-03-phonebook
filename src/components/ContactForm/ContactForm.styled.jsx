import styled from "@emotion/styled";
import {Form, Field, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
display: flex;
justify-content: space-between;
flex-direction: column;
gap: 12px;
padding: 20px 24px;

width: 100%;
border: ${props => `2px solid ${props.theme.colors.grey}`};
`

export const Label = styled.label`
display: block;
font-size: 24px;
`
export const Input = styled(Field)`
padding: 8px 4px;
width: 100%;
height: 24px;
border: ${props => `2px solid ${props.theme.colors.grey}`};
`

export const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

const ErrorText = styled.p`
margin: 0px;
color: ${props => `${props.theme.colors.red}`};
`

export const AddButton = styled.button`
display: block;
margin-right: auto;
padding: 8px 12px;

cursor: pointer;
:hover {
    background-color: ${props => `${props.theme.colors.blue}`}
}
`
