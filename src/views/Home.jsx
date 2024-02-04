import { Button, Container, Link } from '@material-ui/core';

import Contact from './Contact';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import SideNavItems from './SideNavItems';
import kae from '../lib/assets/images/kae.jpeg';
import styled from 'styled-components';

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
  padding: 2rem 0 0 0;
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
    margin: 2rem 0 0 0;
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

const StyledLinkBold = styled(Link)`
  color: #000000de;
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
            <SideNavItems name="Home" />
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
          <JobTitle>Software Engineer</JobTitle>
        </ProfileInfo>
        <ProfilePhoto src={kae} alt="Profile Photo" />
      </Profile>

      <StyledContainer maxWidth="md">
        <AboutMe id="about-me">
          <SectionTitle>About Me</SectionTitle>
          {/* <Typography variant="h6">About Me</Typography> */}
          <P>
            Hi! My name is Kaelyn. I&apos;m a Software Engineer from Canada
            based in Irvine, California. I am passionate about building
            beautiful interfaces and making the web accessible for all.
          </P>

          <P>
            Currently I am working at&nbsp;
            <StyledLinkBold
              href="https://www.blizzard.com/"
              target="_blank"
              rel="noopener"
            >
              Blizzard Entertainment
            </StyledLinkBold>
            &nbsp;working on the{' '}
            <StyledLinkBold
              href="https://www.battle.net/"
              target="_blank"
              rel="noopener"
            >
              Battle.net
            </StyledLinkBold>{' '}
            e-commerce storefront delivering games and experiences to millions
            of players. Previously I worked at&nbsp;
            <StyledLinkBold
              href="https://uplift.com/"
              target="_blank"
              rel="noopener"
            >
              Uplift
            </StyledLinkBold>
            &nbsp;making travel accessible and affordable for everyone, prior to
            that I was at &nbsp;
            <StyledLinkBold
              href="https://ampleorganics.com/"
              target="_blank"
              rel="noopener"
            >
              Ample Organics
            </StyledLinkBold>
            &nbsp;making medical cannabis safely accessible to those in need,
            and I also worked at &nbsp;
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
            When I am not coding I enjoy rock climbing, cosplaying, streaming
            video games on twitch, attempting digital art and binging anime.
          </P>
        </AboutMe>

        <WorkExperience id="work-experience">
          <SectionTitle>Work Experience</SectionTitle>

          <SubHeading>Software Engineer - Blizzard Entertainment</SubHeading>
          <Date>April 2022 - Present</Date>
          <P>
            Maintained Battle.net e-commerce application (Angular and Java) with
            20 million concurrent users, partaking in ops, on-call rotations,
            resolving bugs, updating dependencies, and maintaining releases
            developing features for deployment. Improved purchase conversion of
            products by ~9% through various A/B tests focused on user behavior,
            such as product ordering and interface changes. Integrated web app
            with Battle.net Mobile App (iOS and Android) allowing users to allow
            purchase in their respective mobile game apps to purchase in game.
            Automated management of on-premise servers to limit toil during the
            teamr&apos;s ongoing cloud migration efforts
          </P>

          <br />
          <br />

          <SubHeading>Senior Software Engineer - Uplift Inc.</SubHeading>
          <Date>October 2019 - March 2022</Date>
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
            Angular, RxJS, React, Redux, Ruby on Rails, Vue, AWS, PostgreSQL,
            Docker, Git
          </p>

          <br />
          <br />

          <SubHeading>Languages</SubHeading>
          <p>Javascript, Typescript, HTML & CSS, Java, Ruby, Python, SQL</p>

          <br />
          <br />

          <SubHeading>Others</SubHeading>
          <p>Web Components, Figma, UX / UI design, Technical writing</p>
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

        <Contact />
      </StyledContainer>
    </>
  );
};

export default Home;
