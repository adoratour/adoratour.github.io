import React from 'react';
import { withRouter } from 'next/router';
import { Menu } from 'antd';
import ActiveLink from 'library/helpers/activeLink';

import {
  HOME_PAGE,
  TRAVEL_PAGE,
  SIM_WIFI_PAGE,
  SHOP_PAGE,
  VISA_PAGE,
  BLOG_PAGE
} from 'settings/constant';

const MainMenu = ({ className, router }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <ActiveLink
          className={router.pathname === HOME_PAGE ? 'active' : ''}
          href={`${HOME_PAGE}`}
        >
          Trang chủ
        </ActiveLink>
      </Menu.Item>
      <Menu.Item key="1">
        <ActiveLink
          className={router.pathname === TRAVEL_PAGE ? 'active' : ''}
          href={`${TRAVEL_PAGE}`}
        >
          Du lịch
        </ActiveLink>
      </Menu.Item>
      <Menu.Item key="2">
        <ActiveLink
          className={router.pathname === SIM_WIFI_PAGE ? 'active' : ''}
          href={`${SIM_WIFI_PAGE}`}
        >
          Sim & WIFI
        </ActiveLink>
      </Menu.Item>
      <Menu.Item key="3">
        <ActiveLink
          className={router.pathname === SHOP_PAGE ? 'active' : ''}
          href={`${SHOP_PAGE}`}
        >
          Shop
        </ActiveLink>
      </Menu.Item>
      <Menu.Item key="4">
        <ActiveLink
          className={router.pathname === VISA_PAGE ? 'active' : ''}
          href={`${VISA_PAGE}`}
        >
          Visa
        </ActiveLink>
      </Menu.Item>
      <Menu.Item key="5">
        <ActiveLink
          className={router.pathname === BLOG_PAGE ? 'active' : ''}
          href={`${BLOG_PAGE}`}
        >
          Blog
        </ActiveLink>
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(MainMenu);
