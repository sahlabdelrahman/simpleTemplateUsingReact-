import React from 'react';
import {NavLink} from 'react-router-dom';

import {NavbarSection, Container, Logo, LogoText, UlList, ListItem, Anchor, NLink} from './style.js'

const Navbar = () => {
  return (
    <NavbarSection>
      <Container>

        <Logo>
          <LogoText>Profile</LogoText>
        </Logo>

        <UlList>
          <ListItem><NLink exact to='/'>Home</NLink></ListItem>
          <ListItem><Anchor href='#'>Work</Anchor></ListItem>
          <ListItem><Anchor href='#'>PortfoListItemo</Anchor></ListItem>
          <ListItem><Anchor href='#'>Resume</Anchor></ListItem>
          <ListItem><Anchor href='#'>About</Anchor></ListItem>
          <ListItem><NLink to='/contact'>Contact</NLink></ListItem>
        </UlList>
      </Container>
    </NavbarSection>
  );
}

export default Navbar;