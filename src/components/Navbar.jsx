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
        <img src={logo} />

        {/* Navlinks */}
        <NavList>
          {navlinks.map(({ title, url }, index) => (
            <NavListItem key={index}>
              <Link to={url}>{title}</Link>
            </NavListItem>
          ))}

          {/* Search Icon */}
          <NavListItem>
            <i className='fa-sharp fa-solid fa-magnifying-glass' />
          </NavListItem>

          {/* Hamburger Icon */}
          <NavListItem>
            <HamburgerWrapper>
            </HamburgerWrapper>
          </NavListItem>
        </NavList>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header``;

const Wrapper = styled.nav``;

const NavList = styled.ul``;

const NavListItem = styled.li``;

const HamburgerWrapper = styled.div``;
