import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import FavoriteIcon from '@material-ui/icons/Favorite';

const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
  cursor: pointer;
  transform: rotate(90deg);

  transition: all 0.2s ease;

  &:hover {
    color: #fbd8c9;
  }
`;

const FooterStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.1rem;
  padding: 2rem 0;
`;

// const MadeWith = styled.div`
//   display: flex;
//   align-items: center;
// `;

const Footer = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 'auto' }}>
      <FooterStyles>
        <StyledArrowBackIosIcon onClick={scrollToTop} />
        {/* <MadeWith>
          <div>Made with&nbsp;</div>
          <FavoriteIcon style={{ fontSize: '1.2rem' }} />
        </MadeWith> */}
        <div>© 2022 Kaelyn Suh</div>
      </FooterStyles>
    </Container>
  );
};

export default Footer;
