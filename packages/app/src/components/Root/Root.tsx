import React, { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import MuiApartmentIcon from '@material-ui/icons/Apartment';
import MuiCategoryIcon from '@material-ui/icons/Category';
import MuiMemoryIcon from '@material-ui/icons/Memory';
import MuiPeopleIcon from '@material-ui/icons/People';

import ExtensionIcon from '@material-ui/icons/Extension';
import MapIcon from '@material-ui/icons/MyLocation';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import CreateComponentIcon from '@material-ui/icons/AddCircleOutline';
import LogoFull from './LogoFull';
import LogoIcon from './LogoIcon';
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import { SidebarSearchModal } from '@backstage/plugin-search';
import {
  Sidebar,
  sidebarConfig,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarPage,
  SidebarScrollWrapper,
  SidebarSpace,
  useSidebarOpenState,
  Link,
} from '@backstage/core-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useSidebarLogoStyles = makeStyles({
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: -14,
  },
  link: {
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: 24,
  },
});

const SidebarLogo = () => {
  const classes = useSidebarLogoStyles();
  const { isOpen } = useSidebarOpenState();

  return (
    <div className={classes.root}>
      <Link to="/" underline="none" className={classes.link} aria-label="Home">
        {isOpen ? <LogoFull /> : <LogoIcon />}
      </Link>
    </div>
  );
};

export const Root = ({ children }: PropsWithChildren<{}>) => (
  <SidebarPage>
    <Sidebar>
      <SidebarLogo />
      <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
        <SidebarSearchModal />
      </SidebarGroup>
      <SidebarDivider />
      <SidebarGroup label="Menu" icon={<MenuIcon />}>
        {/* Global nav, not org-specific */}
<<<<<<< HEAD
        <SidebarItem icon={HomeIcon} to="http://localhost:3000" text="Home" />
        <SidebarItem icon={MuiMenuBookIcon } to="http://localhost:3000/catalog?filters%5Bkind%5D=domains&filters%5Buser%5D=all" text="Domains" />
        <SidebarItem icon={MuiMenuBookIcon } to="http://localhost:3000/catalog?filters%5Bkind%5D=subdomains&filters%5Buser%5D=all" text="Subdomains" />
        <SidebarItem icon={MuiMenuBookIcon } to="" text="Services" />
        <SidebarItem icon={MuiMenuBookIcon } to="" text="Teams" />
=======
        <SidebarItem icon={HomeIcon} to="catalog" text="Home" />
        <SidebarItem icon={MuiApartmentIcon } to="domains" text="Domains" />
        <SidebarItem icon={MuiCategoryIcon } to="subdomains" text="Subdomains" />
        <SidebarItem icon={MuiMemoryIcon } to="services" text="Services" />
        <SidebarItem icon={MuiPeopleIcon } to="teams" text="Teams" />
>>>>>>> fba961a0358f47619d24b0b381d34423ed82e1b6
        <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />
        <SidebarItem icon={LibraryBooks} to="docs" text="Docs" />
        <SidebarItem icon={CreateComponentIcon} to="create" text="Create..." />
        {/* End global nav */}
        <SidebarDivider />
        <SidebarScrollWrapper>
          <SidebarItem icon={MapIcon} to="tech-radar" text="Tech Radar" />
        </SidebarScrollWrapper>
      </SidebarGroup>
      <SidebarSpace />
      <SidebarDivider />
      <SidebarGroup
        label="Settings"
        icon={<UserSettingsSignInAvatar />}
        to="/settings"
      >
        <SidebarSettings />
      </SidebarGroup>
    </Sidebar>
    {children}
  </SidebarPage>
);
