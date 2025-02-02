import React, { useState } from 'react'
import styles from './Header.module.css'
import sidebarIcon from '/src/assets/sidebar/sidebar.png'
import { useSidebarContext } from '../SidebarContext/SidebarContext';

export const Header = () => {

    const [sidebarClosed, setSidebarClosed] = useSidebarContext();

    return (
        <header className={styles.header}>
            <img
                className={`${styles.sidebarBtn} ${sidebarClosed && styles.sidebarBtnClosed}`}
                src={sidebarIcon}
                onClick={() => setSidebarClosed(false)}
                alt='Sidebar icon'
            />
            <a href='/'>Jennifer-Yoon</a>
        </header>
    )
}