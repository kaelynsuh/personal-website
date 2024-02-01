import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #000000de;

  transition: all 0.2s ease;

  &:hover {
    color: #fbd8c9;
  }
`;

// ContactMe
const ContactMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fafafa;
  border: 7px solid ${(props) => props.theme.palette.primary.main};
  text-align: center;

  margin-bottom: 5rem;
  padding: 5rem 0.2rem;
  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    margin: 9rem;
    padding: 5rem 2rem;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

// CONTENT
const SectionTitle = styled.div`
  font-size: 2.5rem;
  padding-bottom: 1rem;

  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    padding-bottom: 2rem;
  }

  /* font-family: 'Indie Flower'; */
  /* font-weight: bold; */
`;

const Home = () => {
  return (
    <>
      <ContactMe id="contact-me">
        <SectionTitle>Contact Me</SectionTitle>
        <StyledLink href="mailto:kaelyn@kaelyn.dev" style={{ color: 'black' }}>
          kaelyn@kaelyn.dev
        </StyledLink>
        <br />
        {/* github, StyledLinkedin, twitter, insta, twitch */}
        <Icons>
          <StyledLink
            href="https://github.com/kaelynsuh"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/in/kaelynsuh"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </StyledLink>
          <StyledLink
            href="https://www.instagram.com/kaelynge"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon />
          </StyledLink>
          <StyledLink
            href="https://twitter.com/kaelynge"
            target="_blank"
            rel="noopener"
          >
            <TwitterIcon />
          </StyledLink>
          <StyledLink
            href="https://www.twitch.tv/kae_tv"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faTwitch} style={{ fontSize: '1.6rem' }} />
          </StyledLink>
        </Icons>
      </ContactMe>
    </>
  );
};

export default Home;
