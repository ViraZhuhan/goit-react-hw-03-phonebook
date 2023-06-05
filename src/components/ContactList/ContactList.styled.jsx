import styled from '@emotion/styled';

export const List = styled.ul`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: start;
gap: 12px;
padding: 0px;
`

export const Item = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
gap: 8px;

font-size: 24px;
`

export const Button = styled.button`
display: block;
margin-right: auto;
padding: 8px 12px;

cursor: pointer;
:hover {
    background-color: ${props => `${props.theme.colors.blue}`}
}
`