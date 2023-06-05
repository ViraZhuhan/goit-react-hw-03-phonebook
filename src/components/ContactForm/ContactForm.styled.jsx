import styled from '@emotion/styled';

export const Form = styled.form`
display: flex;
justify-content: space-between;
flex-direction: column;
gap: 12px;
padding: 20px 24px;

width: 320px;
border: ${props => `2px solid ${props.theme.colors.grey}`};
`

export const Label = styled.label`
display: block;
font-size: 24px;
`
export const Input = styled.input`
padding: 8px 4px;
width: 200px;
border: ${props => `2px solid ${props.theme.colors.grey}`};
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
