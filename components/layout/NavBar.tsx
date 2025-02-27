import React from 'react';
import { styled } from 'stitches.config';
import Link from 'next/link';
import { NavBarMenus, Routes } from '@/constants/routes';
import { StyledButton } from '../common/Button';
import { Logo as LogoSvg } from '@/public/icons';
import ThemeSwitch from '../ThemeSwitch';
import NavBarMobile from './NavBarMobile';

const StyledNavArea = styled('div', {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-between',
  gap: 40,
  alignItems: 'center',
  backgroundColor: '$backgroundPrimary',
  width: '100%',
  height: '80px',
  margin: '0 auto',
  paddingRight: '30px',
  zIndex: '99',

  '@bp2': {
    padding: '1rem 2rem',
  },
});

const Logo = styled(LogoSvg, {
  display: 'block',
  maxWidth: 180,
  width: '100%',
  '& path': {
    fill: '$textPrimary',
  },

  '@bp2': {
    maxWidth: 230,
  },
});

const Title = styled('h1', {
  width: 0,
  height: 0,
  fontSize: 0,
  overflow: 'hidden',
  clipPath: 'rect(0, 0, 0, 0)',
});

const NavContainer = styled('div', {
  display: 'none',
  '@bp2': {
    display: 'flex',
  },
});

const MenuItem = styled('span', {
  fontWeight: 700,
  color: '$textPrimary',
  fontSize: '24px',
  lineHeight: '24px',
});

const StyledMenuBox = styled('div', {
  display: 'flex',
  flex: 1,
  alignItems: 'flex-start',
  padding: '0 60px',
  gap: '32px',
});

const StyledMenu = styled('div', {
  display: 'inline-block',

  '@bp1': {
    padding: '0',
  },
  '@bp2': {
    padding: '0 1.5rem',
  },
});

const SideBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 40,
});

const SolidButton = styled(StyledButton, {
  height: 40,
  backgroundColor: '$textPrimary',
  color: '$backgroundPrimary',
  border: 'none',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '24px',
});

const NavBar = () => {
  return (
    <StyledNavArea>
      <Link href={Routes.HOME.route} passHref>
        <Logo width={230} height={'100%'} />
        <Title>{Routes.HOME.title}</Title>
      </Link>
      <NavBarMobile />
      <NavContainer>
        <StyledMenuBox>
          {NavBarMenus.map((menu) => (
            <StyledMenu key={menu.route}>
              <Link href={menu.route} passHref>
                <MenuItem>{menu.title}</MenuItem>
              </Link>
            </StyledMenu>
          ))}
        </StyledMenuBox>
        <SideBox>
          <ThemeSwitch />
          <Link href={Routes.SPONSOR_JOIN.route} passHref>
            <SolidButton size={'small'}>
              {Routes.SPONSOR_JOIN.title}
            </SolidButton>
          </Link>
        </SideBox>
      </NavContainer>
    </StyledNavArea>
  );
};

export default NavBar;
