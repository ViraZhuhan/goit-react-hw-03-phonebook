import styled from '@emotion/styled';

export const List = styled.ul`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-left: 0px;
gap: 6px;
padding: 0px;
width: 100%;
`

export const Item = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
gap: 40px;

font-size: 24px;
`

export const Button = styled.button`
display: block;
padding: 8px 12px;

cursor: pointer;
:hover {
    background-color: ${props => `${props.theme.colors.blue}`}
}
`