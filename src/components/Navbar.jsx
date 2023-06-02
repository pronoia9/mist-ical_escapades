import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { logo } from '../assets';

const navlinks = [
  { title: 'Basecamp', url: '/' },
  { title: 'Summit Stories', url: '/' },
  { title: 'Trailblaze', url: '/contact' },
];

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        {/* Logo */}
        <Logo src={logo} />

        {/* Navlinks */}
        <NavList>
          {navlinks.map(({ title, url }, index) => (
            <NavListItem key={index}>
              <Link to={url}>{title}</Link>
            </NavListItem>
          ))}

          {/* Search Icon */}
          <NavListItem className='search'>
            <i className='fa-sharp fa-solid fa-magnifying-glass' />
          </NavListItem>

          {/* Hamburger Icon */}
          <NavListItem className='hamburger'>
            <HamburgerWrapper>
              <HamburgerBar />
            </HamburgerWrapper>
          </NavListItem>
        </NavList>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Wrapper = styled.nav`
  max-width: 1400px;
  /* padding: 0 2rem; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavListItem = styled.li`
  a {
    color: #fff;
    padding: 0 1.5rem;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 0.83rem;
  }

  &.search i {
    font-size: 1.05rem;
    padding: 0 3rem;
    cursor: pointer;
  }

  &.hamburger {
    padding-left: 1.5rem;
  }
`;

const HamburgerWrapper = styled.div`
  padding: 0;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: rgba(155, 155, 155, 0.7);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HamburgerBar = styled.div`
  position: relative;
  width: 52%;
  height: 1.3px;
  background-color: #fff;
  border-radius: 2px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 100%;
    background-color: inherit;
    border-radius: 2px;
  }

  &::before {
    top: -4.5px;
  }

  &::after {
    top: 4.5px;
  }
`;