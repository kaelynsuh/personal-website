/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Link,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core';

// import { TabPanel } from '@material-ui/lab';
// import TabPanel from '@material-ui/lab/TabPanel';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FavoriteIcon from '@material-ui/icons/Favorite';

import MenuIcon from '@material-ui/icons/Menu';

// import { useTheme } from '@material-ui/core/styles';

import kae from '../lib/assets/images/kae.jpg';
import logo from '../lib/assets/images/logo.png';

import SideNavItems from './SideNavItems';

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

  font-size: 2rem;
  margin-right: -7rem;
  z-index: 1;
`;

const Name = styled.div`
  background-color: #fff;
  /* background-color: #f2d9cd; */

  /* background-color: #e2c1bd; */
  /* color: #fff; */

  /* font-family: 'Libre Baskerville Italic'; */
  font-size: 3.5rem;
  /* font-weight: bold; */

  padding: 0 1rem;
`;

const Title = styled.div`
  background-color: #fff;
  /* background-color: #f2d9cd; */

  /* background-color: #e2c1bd; */

  /* color: #fff; */

  font-size: 1.6rem;
  /* font-weight: bold; */

  padding: 0 1rem 0.5rem 1rem;
`;

const ProfilePhoto = styled.img`
  margin: 2rem;
  width: 670px;

  /* opacity: 0.6; */
`;

const Logo = styled.img`
  width: 40px;
  /* margin: 2rem; */
  /* width: 670px; */

  /* opacity: 0.6; */
`;

const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
  cursor: pointer;
  transform: rotate(90deg);
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  padding: 1rem 4rem;
  text-transform: capitalize;
  transition: all 0.4s ease;

  /* revisit: revert below maybe */
  box-shadow: none;

  &:hover {
    background-color: #fbd8c9;
    color: #fff;

    /* revisit: revert below maybe */
    box-shadow: none;
  }
`;

const StyledContainer = styled(Container)`
  background: linear-gradient(#ffeae0, #ffeae0) no-repeat center/2px 100%;
`;

const StyledLink = styled(Link)`
  color: #000000;
`;

// About Me
const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  margin: 2rem 2rem 5rem 2rem;
  padding: 5rem;
  background-color: #fafafa;
`;

// WorkExperience
const WorkExperience = styled.div`
  background-color: #fafafa;
  border: 7px solid ${(props) => props.theme.palette.primary.main};
  text-align: center;

  margin: 0 2rem;
  padding: 5rem 10rem;
`;

// Skills
const Skills = styled.div`
  background-color: #fafafa;
  border: 7px solid ${(props) => props.theme.palette.primary.main};
  text-align: center;

  margin: 9rem 10rem;
  padding: 5rem 2rem;
`;

// Education
const Education = styled.div`
  background-color: #fafafa;
  border: 7px solid ${(props) => props.theme.palette.primary.main};
  text-align: center;

  margin: 9rem 7rem;
  padding: 5rem 2rem;
`;

// Portfolio
const Portfolio = styled.div`
  display: flex;
  justify-content: center;
`;

// ContactMe
const ContactMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fafafa;
  border: 7px solid ${(props) => props.theme.palette.primary.main};
  text-align: center;

  margin: 9rem 9rem 2rem 9rem;
  padding: 5rem 2rem;
`;

// Footer
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.1rem;
  padding: 2rem 0;
`;

const MadeWith = styled.div`
  display: flex;
  align-items: center;
`;

const SideNav = styled.div`
  position: fixed;
  top: 50%;
  right: 0%;
  margin-right: 2rem;
`;

const Ul = styled.ul`
  list-style-type: none;
`;

// CONTENT
const SectionTitle = styled.div`
  font-size: 2.5rem;
  padding-bottom: 2rem;

  /* font-family: 'Indie Flower'; */
  /* font-weight: bold; */
`;

const Date = styled.div`
  /* font-weight: bold; */
`;

const SubHeading = styled.div`
  font-weight: bold;
`;

const Home = () => {
  // const theme = useTheme();
  // const [isShown, setIsShown] = useState(false);
  const [isShown, setIsShown] = useState({});
  // console.log('isShown: ', isShown);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

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

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Logo src={logo} alt="logo" />
          </IconButton>

          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/portfolio">
            Portfolio
          </Button>
        </Toolbar>
      </AppBar>

      <Profile>
        <ProfileInfo>
          <Name>Kaelyn Suh</Name>
          <Title>Software Developer</Title>
        </ProfileInfo>
        <ProfilePhoto src={kae} alt="Profile Photo" />
      </Profile>

      <StyledContainer maxWidth="md">
        <AboutMe id="about-me">
          <SectionTitle>About Me</SectionTitle>
          {/* <Typography variant="h6">About Me</Typography> */}
          <div>
            Hi! My name is Kaelyn. I&apos;m a Software Developer based in
            Toronto. I am passionate about building beautiful interfaces and
            making the web accessible for all.
          </div>

          <br />

          <div>
            Currently I am working at Uplift making travel accessible and
            affordable for everyone. Previously I worked at Ample Organics
            making medical cannabis safely accessible to those in need, and
            prior to that I was at E-Data Now making quality assurance compliant
            in the automotive space.
          </div>

          <br />

          <div>
            When I am not coding I enjoy streaming video games on twitch,
            attempting art and yoga.
          </div>
          <br />

          {/* <div>and here. more about me here</div> */}
        </AboutMe>

        <WorkExperience id="work-experience">
          <SectionTitle>Work Experience</SectionTitle>

          <Date>Oct 2019 - Present</Date>
          <SubHeading>Software Engineer - Uplift Inc.</SubHeading>
          <br />
          <div>
            Ownership of the Borrower&apos;s Portal, where consumers can service
            and manage their loans. It was re-platformed from Clojure to React
            and Redux. Other projects on the platform include scheduling
            payments, down payments, beyond travel functionality, FAQ&apos;s and
            search capability.
          </div>

          <br />

          <div>
            Also built the CCPA (California Consumer Privacy Act) Portal where
            users can opt out of data sharing, written in React, Typescript,
            GraphQL and Apollo.
          </div>

          <br />
          <br />
          <br />

          <Date>Sept 2018 - Oct 2019</Date>
          <SubHeading>Software Developer - Ample Organics</SubHeading>
          <br />
          <div>
            Worked on a B2B platform providing a &quot;Seed-to-Sale&quot;
            ecosystem for cannabis businesses. The portal allowed tracking and
            reporting plant growth as well as medical and recreational sales.
            Some technologies used include Vue, Vuex, Ruby on Rails, PostgreSQL,
            Docker, Kubernetes and AWS technologies.
          </div>

          <br />
          <br />
          <br />

          <Date>May 2017 - Sept 2018</Date>
          <SubHeading>Software Developer - E-Data Now</SubHeading>
          <br />
          <div>
            Worked on a Web app to allow users to manage and track production
            and manufacturing processes. Also managed the support portal where
            users can submit and manage requests. Some technologies used include
            Vue, Vuex, Ruby on Rails, PostreSQL, Docker and AWS technologies.
          </div>
        </WorkExperience>

        <Skills id="skills">
          <SectionTitle>Skills</SectionTitle>

          <SubHeading>Technologies</SubHeading>
          <br />
          <div>
            React JS, Redux, Ruby on Rails, Vue JS, AWS, PostgreSQL, Docker, Git
          </div>
          <br />
          <br />

          <SubHeading>Languages</SubHeading>
          <br />
          <div>Javascript, Typescript, HTML & CSS, Ruby, Python, Java, SQL</div>
          <br />
          <br />
        </Skills>

        <Education id="education">
          <SectionTitle>Education</SectionTitle>

          <Date>Sept 2012 - Apr 2016</Date>
          <SubHeading>
            Queen&apos;s University - Bachelor of Computing
            {/* Queen&apos;s University - Bachelor of Computing, Computer Science */}
          </SubHeading>
          <br />
          <div>
            Recipient of the Queen&apos;s University Excellence Scholarship
          </div>
          <div>
            Activities and Societies: Queen&apos;s Dance Club, Flow Dance Club
          </div>
        </Education>

        <Portfolio>
          <StyledButton variant="contained" color="primary">
            View My Portfolio
          </StyledButton>
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
          <div>
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
          </div>
        </ContactMe>
      </StyledContainer>

      <Container maxWidth="md">
        <Footer>
          <StyledArrowBackIosIcon onClick={scrollToTop} />
          <MadeWith>
            <div>Made with&nbsp;</div>
            <FavoriteIcon style={{ fontSize: '1.2rem' }} />
            <div>&nbsp;using React and Material UI</div>
          </MadeWith>
          <div>© 2021 Kaelyn Suh</div>
        </Footer>
      </Container>
    </>
  );
};

export default Home;
