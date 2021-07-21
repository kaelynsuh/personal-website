import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 5rem 0;
`;

const Portfolio = () => {
  return (
    <>
      <Wrapper>
        <h3>WIP</h3>
      </Wrapper>
    </>
  );
};

export default Portfolio;
