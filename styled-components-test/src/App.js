import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ page }) => {
    if (page === 'first') return 'flex-end';
    else if (page === 'middle') return 'space-between';
    else return 'flex-start';
  }};
`;

const Link = styled.a.attrs((props) => ({ target: '_blank' }))`
  font-size: 1.5rem;
  color: violet;
`;

const App = () => {
  return (
    <MainWrapper>
      <Button primary margin="5rem">
        My primary button
      </Button>
      <Button>My button</Button>
      <PaginationWrapper page="middle">
        <Button>Page 1</Button>
        <Button>Page 3</Button>
      </PaginationWrapper>
      <Link href="http://www.google.com">One Link</Link>
      <Link href="http://www.google.com">Another Link</Link>
    </MainWrapper>
  );
};
export default App;
