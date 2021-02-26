import React, { useContext } from 'react';
import { Menu } from 'antd';
import ActiveLink from 'library/helpers/activeLink';
import { AuthContext } from 'context/AuthProvider';
import {
  HOME_PAGE,
  TRAVEL_PAGE,
  SIM_WIFI_PAGE,
  SHOP_PAGE,
  VISA_PAGE,
  BLOG_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
} from 'settings/constant';

const MobileMenu = ({ className }) => {
  // auth context
  const { loggedIn, logOut } = useContext(AuthContext);

  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <ActiveLink href={HOME_PAGE}>Trang Chủ</ActiveLink>
      </Menu.Item>
      <Menu.Item key="1">
        <ActiveLink href={TRAVEL_PAGE}>Du Lịch</ActiveLink>
      </Menu.Item>
      <Menu.Item key="2">
        <ActiveLink href={SIM_WIFI_PAGE}>Sim & WIFI</ActiveLink>
      </Menu.Item>
      <Menu.Item key="3">
        <ActiveLink href={SHOP_PAGE}>Shop</ActiveLink>
      </Menu.Item>
      <Menu.Item key="4">
        <ActiveLink href={VISA_PAGE}>Visa</ActiveLink>
      </Menu.Item>
      <Menu.Item key="5">
        <ActiveLink href={BLOG_PAGE}>Blog</ActiveLink>
      </Menu.Item>
      {loggedIn && (
        <Menu.Item key="6">
          <ActiveLink href={AGENT_ACCOUNT_SETTINGS_PAGE}>
            Account Settings
          </ActiveLink>
        </Menu.Item>
      )}
      {loggedIn && (
        <Menu.Item key="7">
          <button onClick={logOut}>Log Out</button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default MobileMenu;
