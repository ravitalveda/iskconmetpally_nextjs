import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function toggleMenu(): void {
    setMenuOpen((prev) => !prev);
  }

  return (
    <>
      <Overflow className={`${menuOpen && 'open'}`} />
      <Container>
        <Content>
          <Link href='/home'>
            <a href='/home'>
              <table>
                <tr>
                  <td style={{ width: '25%' }}>
                    <Logo src='images/general/27.png'></Logo>
                  </td>
                  <td style={{ width: '75%' }}>
                    <TitleText> ISKCON METPALLY</TitleText>
                  </td>
                </tr>
              </table>
            </a>
          </Link>
          <MenuToggler
            type='button'
            className={`${menuOpen && 'open'}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
          </MenuToggler>
          <Nav className={`${menuOpen && 'open'}`}>
            {[
              'home',
              'about',
              'activities',
              'gallery',
              'contact',
              'donate',
            ].map((link) => (
              <Link key={link} href={`/${link}`} passHref>
                <NavLink>{link}</NavLink>
              </Link>
            ))}
            <Divider />
          </Nav>
        </Content>
      </Container>
    </>
  );
}

const Overflow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.black};
  font-family: 'Rosario', sans-serif;

  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s opacity ease-out, visibility ease-out 0.3s;

  &.open {
    opacity: 0.5;
    visibility: visible;
  }
`;

const Container = styled.header`
  padding-top: 2vh;
  padding-bottom: 2vh;
  position: sticky;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background: #a04e4e url(images/shared/pattern-chakras-white.png);
  background-repeat: repeat;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60%;
  margin: 0 12px;
`;

const Logo = styled.img`
  position: inline;
  height: 60px;
`;

const TitleText = styled.span`
  font-size: 29px;
  float: left;
  color: white;
  margin-left: 4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`;

const MenuToggler = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;

  @media (min-width: 768px) {
    display: none;
  }

  &.open {
    span:first-of-type {
      transform: rotate(45deg);
    }

    span:last-of-type {
      transform: rotate(-45deg) translate(3.5px, -5px);
    }
  }

  span {
    display: block;
    height: 1px;
    width: 23px;
    background: ${(props) => props.theme.colors.black};
    transition: transform 0.3s ease;
  }

  span + span {
    margin-top: 5px;
  }
`;

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  left: 0;
  padding: 0 24px;
  top: 7.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 0px;
  transition: height 0.4s ease-out;
  overflow: hidden;

  @media (min-width: 768px) {
    position: static;
    height: auto;
    flex-direction: row;
    width: auto;
    padding: 0;
  }

  @media (min-width: 950px) {
    /* flex: 1; */
  }

  &.open {
    height: 25.3rem;
  }
`;

const NavLink = styled.a`
  font-size: 2rem;

  text-decoration: none;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    text-decoration: underline;
  }

  &:first-letter {
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    margin-right: 3.7rem;
    font-size: 1.6rem;

    &:hover {
      text-decoration: none;
      opacity: 0.3;
    }

    & + & {
      margin-top: 0rem !important;
    }
  }

  & + & {
    margin-top: 2rem;
  }
`;

const Divider = styled.hr`
  width: 100%;
  background: red;
  height: 1px;
  border: none;
  background: ${(props) => props.theme.colors.black};
  opacity: 0.25;
  margin: 2rem 0;

  @media (min-width: 768px) {
    display: none;
  }
`;
