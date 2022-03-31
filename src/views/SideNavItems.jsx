import React, { useState } from 'react';
import styled from 'styled-components';
// import { Transition } from 'react-transition-group';
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
`;

const StyledFilledCircleIcon = styled(FiberManualRecordIcon)`
  position: absolute;

  transition: all 2s ease;
`;

const SideNavItems = ({ name }) => {
  const [isShown, setIsShown] = useState({});

  const navItem =
    name !== 'Home' ? name.replace(/\s+/g, '-').toLowerCase() : '';

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
          <StyledOutlinedCircle />
          {isShown[navItem] && <StyledFilledCircleIcon />}
        </NavIcon>
      </Li>
    </>
  );
};

export default SideNavItems;
