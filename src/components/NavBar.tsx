import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #333;
  color: white;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &.active {
      border-bottom: 2px solid yellow;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/ReactMovie" end>
        Home
      </NavLink>
      <NavLink to="/coming-soon">
        Coming Soon
      </NavLink>
      <NavLink to="/now-playing">
        Now Playing
      </NavLink>
    </Nav>
  );
};

export default Navbar;