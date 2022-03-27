/* eslint-disable no-debugger */
import React from 'react';
import styled from 'styled-components';
import { Button, Container, Link } from '@material-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import SideNavItems from './SideNavItems';

import kae from '../lib/assets/images/kae.jpeg';

const SideNav = styled.div`
  display: none;

  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    display: block;
    position: fixed;
    top: 50%;
    right: 0%;
    margin-right: 2rem;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
`;

// Profile
const Profile = styled.div`
  display: flex;
  justify-content: center;

  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 2rem 0;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  z-index: 1;

  margin-right: -7rem;
  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    font-size: 2rem;
    margin-right: -7rem;
  }
`;

const Name = styled.div`
  /* font-family: 'Libre Baskerville Italic'; */
  /* font-weight: bold; */
  /* font-family: 'Indie Flower'; */

  font-size: 1.5rem;
  padding: 0 0 0 2rem;
  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    font-size: 3.5rem;
    padding: 0 1rem;
  }
`;

const JobTitle = styled.div`
  font-size: 1rem;
  padding: 0 0 0 2rem;
  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    font-size: 1.6rem;
    padding: 0 1rem 0.5rem 1rem;
  }
`;

const ProfilePhoto = styled.img`
  width: 100%;

  /* revisit: trim photo */
  margin-right: -7rem;
  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    margin: 2rem;
    width: 670px;
  }
`;

const P = styled.p`
  text-align: justify;

  margin: 0.5rem 0;
  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    margin: 1rem 0;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  padding: 1rem 4rem;
  text-transform: capitalize;
  transition: all 0.2s ease;

  box-shadow: none;

  &:hover {
    background-color: #fbd8c9;
    color: #fff;

    box-shadow: none;
  }
`;

const StyledContainer = styled(Container)`
  background: linear-gradient(#ffeae0, #ffeae0) no-repeat center/2px 100%;
`;

const StyledLink = styled(Link)`
  color: #000000de;
`;

const StyledLinkBold = styled(Link)`
  color: #000000de;
  /* color: #ba6d6dde; */
  /* color: #e19f9f; */
  font-weight: bold;
`;

// About Me
const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: #fafafa;

  margin-bottom: 5rem;
  padding: 5rem 0;
  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    margin: 2rem 2rem 5rem 2rem;
    padding: 5rem;
  }
`;

// WorkExperience
const WorkExperience = styled.div`
  background-color: #fafafa;
  border: 7px solid ${(props) => props.theme.palette.primary.main};
  text-align: center;

  margin-bottom: 5rem;
  padding: 2rem 0.2rem;
  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    margin: 0 2rem;
    padding: 5rem 6rem;
  }
`;

// Skills
const Skills = styled.div`
  background-color: #fafafa;
  border: 7px solid ${(props) => props.theme.palette.primary.main};
  text-align: center;

  margin-bottom: 5rem;
  padding: 2rem 0.2rem;
  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    margin: 9rem 10rem;
    padding: 5rem 2rem;
  }
`;

// Education
const Education = styled.div`
  background-color: #fafafa;
  border: 7px solid ${(props) => props.theme.palette.primary.main};
  text-align: center;

  margin-bottom: 5rem;
  padding: 2rem 0.2rem;
  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    margin: 9rem 7rem;
    padding: 5rem 2rem;
  }
`;

// Portfolio
const Portfolio = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 5rem;
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
    margin: 9rem 9rem 2rem 9rem;
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

const Date = styled.div``;

const SubHeading = styled.div`
  font-weight: bold;
`;

const Home = () => {
  return (
    <>
      <SideNav>
        <nav>
          <Ul>
            <SideNavItems name="About Me" />
            <SideNavItems name="Work Experience" />
            <SideNavItems name="Skills" />
            <SideNavItems name="Education" />
            <SideNavItems name="Contact Me" />
          </Ul>
        </nav>
      </SideNav>

      <Profile>
        <ProfileInfo>
          <Name>Kaelyn Suh</Name>
          <JobTitle>Software Developer</JobTitle>
        </ProfileInfo>
        <ProfilePhoto src={kae} alt="Profile Photo" />
      </Profile>

      <StyledContainer maxWidth="md">
        <AboutMe id="about-me">
          <SectionTitle>About Me</SectionTitle>
          {/* <Typography variant="h6">About Me</Typography> */}
          <P>
            Hi! My name is Kaelyn. I&apos;m a Software Developer based in
            Toronto. I am passionate about building beautiful interfaces and
            making the web accessible for all.
          </P>

          <P>
            Currently I am working at&nbsp;
            <StyledLinkBold
              href="https://uplift.com/"
              target="_blank"
              rel="noopener"
            >
              Uplift
            </StyledLinkBold>
            &nbsp;making travel accessible and affordable for everyone.
            Previously I worked at&nbsp;
            <StyledLinkBold
              href="https://ampleorganics.com/"
              target="_blank"
              rel="noopener"
            >
              Ample Organics
            </StyledLinkBold>
            &nbsp;making medical cannabis safely accessible to those in need,
            and prior to that I was at&nbsp;
            <StyledLinkBold
              href="https://edatanow.com/"
              target="_blank"
              rel="noopener"
            >
              E-Data Now
            </StyledLinkBold>
            &nbsp;making quality assurance compliant in the automotive space.
          </P>

          <P>
            When I am not coding I enjoy streaming video games on twitch,
            attempting digital art, binging anime and yoga.
          </P>
        </AboutMe>

        <WorkExperience id="work-experience">
          <SectionTitle>Work Experience</SectionTitle>

          <SubHeading>Senior Software Engineer - Uplift Inc.</SubHeading>
          <Date>October 2019 - Present</Date>
          <P>
            Ownership of the Borrower&apos;s Portal, where consumers can service
            and manage their loans. It was re-platformed from Clojure to React
            and Redux. Other projects on the platform include scheduling
            payments, down payments, beyond travel functionality, FAQs and
            search capability. Also built the CCPA (California Consumer Privacy
            Act) Portal where users can opt out of data sharing, written in
            React, Typescript, GraphQL and Apollo.
          </P>

          <br />
          <br />

          <SubHeading>Software Developer - Ample Organics</SubHeading>
          <Date>September 2018 - October 2019</Date>
          <P>
            Worked on a B2B platform providing a &quot;Seed-to-Sale&quot;
            ecosystem for cannabis businesses. The portal allowed tracking and
            reporting plant growth as well as medical and recreational sales. In
            addition, I worked closely with the DevOps team in new client
            implementation, infrastructure maintenance, deployments and
            monitoring. Some technologies used include Vue, Vuex, Ruby on Rails,
            PostgreSQL, Docker, Kubernetes and AWS technologies.
          </P>

          <br />
          <br />

          <SubHeading>Software Developer - E-Data Now</SubHeading>
          <Date>May 2017 - September 2018</Date>
          <P>
            Worked on a Web app to allow users to manage and track production
            and manufacturing processes. Also re-platformed the support portal
            from ERB to Vue where users can submit and manage support requests.
            Some technologies used include Vue, Vuex, Ruby on Rails, PostreSQL,
            Docker and AWS technologies.
          </P>
        </WorkExperience>

        <Skills id="skills">
          <SectionTitle>Skills</SectionTitle>

          <SubHeading>Technologies</SubHeading>
          <p>
            React JS, Redux, Ruby on Rails, Vue JS, AWS, PostgreSQL, Docker, Git
          </p>

          <br />
          <br />

          <SubHeading>Languages</SubHeading>
          <p>Javascript, Typescript, HTML & CSS, Ruby, Python, Java, SQL</p>

          <br />
          <br />

          <SubHeading>Others</SubHeading>
          <p>UX / UI design, Technical writing</p>
        </Skills>

        <Education id="education">
          <SectionTitle>Education</SectionTitle>

          <SubHeading>
            Queen&apos;s University - Bachelor of Computing
            {/* Queen&apos;s University - Bachelor of Computing, Computer Science */}
          </SubHeading>
          <Date>September 2012 - April 2016</Date>
          <br />
          <p>Recipient of the Queen&apos;s University Excellence Scholarship</p>
          <p>
            Activities and Societies: Queen&apos;s Dance Club, Flow Dance Club
          </p>
        </Education>

        <Portfolio>
          <ReactRouterLink to="/portfolio" style={{ textDecoration: 'none' }}>
            <StyledButton variant="contained" color="primary">
              View My Portfolio
            </StyledButton>
          </ReactRouterLink>
        </Portfolio>

        <ContactMe id="contact-me">
          <SectionTitle>Contact Me</SectionTitle>
          <StyledLink
            href="mailto:kaelyn@kaelyn.dev"
            style={{ color: 'black' }}
          >
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
              href="https://www.instagram.com/kaelynsuh"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
            </StyledLink>
            <StyledLink
              href="https://twitter.com/kaelynsuh"
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
      </StyledContainer>
    </>
  );
};

export default Home;
