import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;

width: 500px;
height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 32px 40px;
  font-size: 40;
  color: #010101;
  background-color: ${props => `${props.theme.colors.lightblue}`}
`;
