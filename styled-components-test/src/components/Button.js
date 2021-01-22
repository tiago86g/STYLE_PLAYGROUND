import React from 'react';
import styled, { css } from 'styled-components';

import { Wrapper, FadeIn } from './styled';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.lighter};
  color: ${(props) => props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSizes.p};
  margin: ${({ margin }) => margin || '1rem'};
  margin-top: ${({ theme }) => theme.spacers.small}
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  animation: 2000ms ${FadeIn} ease-in;

  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0rem 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    color: white;
    background-color: pink;
  }

  @media ${({ theme }) => theme.mediaQueries.below768} {
    font-size: 0.4rem;
    color: blue;
  }
`;

// ${OutterWrapper}:hover & {color: red;} //it inside StyledButton

const OutterWrapper = styled.div`
  width: 100%;
  background-color: yellow;
  margin-top: 2rem;

  &:hover ${StyledButton} {
    color: green;
  }
`;

// const SuperButton = styled(StyledButton)`
//   font-size: 2.5rem;
// `;

const Button = ({ primary, margin, children }) => {
  return (
    <OutterWrapper>
      <Wrapper>
        <StyledButton margin={margin} primary={primary}>
          {children}
        </StyledButton>
        {/* <SuperButton>Super Button</SuperButton> */}
      </Wrapper>
    </OutterWrapper>
  );
};

export default Button;
