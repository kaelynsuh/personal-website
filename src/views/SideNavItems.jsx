/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
// import { CSSTransition } from 'react-transition-group';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const A = styled.a`
  padding-right: 0.5rem;
  text-decoration: none;

  transition: all 4s ease;

  color: #000000;
`;

const NavIcon = styled.a`
  display: flex;

  color: #000000;
`;

const StyledOutlinedCircle = styled(FiberManualRecordOutlinedIcon)`
  transition: all 2s ease;

  /* &:hover {
    opacity: 0;
  } */
`;

const StyledFilledCircleIcon = styled(FiberManualRecordIcon)`
  position: absolute;

  transition: all 2s ease;
  /* opacity: 0; */
  /* opacity: ${(props) => (props.isHovered ? 1 : 0)}; */

  /* &:hover {
    opacity: 1;
  } */
`;

const SideNavItems = ({ name }) => {
  const [isShown, setIsShown] = useState({});

  let navItem = name.replace(/\s+/g, '-').toLowerCase();

  return (
    <>
      <Li>
        {isShown[navItem] && (
          <A
            href={`#${navItem}`}
            onMouseEnter={() => setIsShown({ ...isShown, [navItem]: true })}
            onMouseLeave={() => setIsShown({ ...isShown, [navItem]: false })}
          >
            {name}
          </A>
        )}
        <NavIcon
          href={`#${navItem}`}
          onMouseEnter={() => setIsShown({ ...isShown, [navItem]: true })}
          onMouseLeave={() => setIsShown({ ...isShown, [navItem]: false })}
        >
          {/* {isShown[navItem] ? (
            <StyledFilledCircleIcon />
          ) : (
            <StyledOutlinedCircle />
          )} */}

          <StyledOutlinedCircle />
          {isShown[navItem] && <StyledFilledCircleIcon />}
        </NavIcon>
      </Li>
    </>
  );
};

export default SideNavItems;
