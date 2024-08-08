// Header.jsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const Header = () => {
    return (
      <header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#333', color: '#fff' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Hammerhead Home Finishing</div>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <a href="#home" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Home</a>
            <a href="#services" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Services</a>
            <a href="#projects" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Projects</a>
            <a href="#contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Contact</a>
          </nav>
        </div>
      </header>
    );
  };
};

export default Header;
