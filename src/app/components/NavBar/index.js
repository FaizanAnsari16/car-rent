import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../Logo/index.tsx';
import { NavItems } from './navitems.tsx';

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
w-full
max-w-screen-2xl
flex
flex-row
items-center
lg:pl-12
lg:pr-12
justify-between
transition-all
    duration-200
    ease-in-out
`}
`;

const LogoContainer = styled.div``;

export function Navbar() {
  return (
    <NavbarContainer id="home">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}
