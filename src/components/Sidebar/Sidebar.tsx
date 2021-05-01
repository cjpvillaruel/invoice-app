import React from 'react';


import { ReactComponent as IconMoon } from 'assets/icon-moon.svg';
import styles from './Sidebar.module.scss';
import Avatar from 'components/Avatar';
import Logo from 'components/Logo';


const SideBar = () => (
  <div className={styles.sidebar}>
    <Logo />
    <div>
      <div className={styles.themeButton}>
        <IconMoon />
      </div>
      <div className={styles.avatarContainer}>
        <Avatar />
      </div>
    </div>
  </div>
);

export default SideBar;
