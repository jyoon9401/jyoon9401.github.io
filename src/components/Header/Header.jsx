import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import sidebarIcon from '/src/assets/sidebar/sidebar.png'
import { useSidebarContext } from '../SidebarContext/SidebarContext';

export const Header = () => {

    const [sidebarClosed, setSidebarClosed] = useSidebarContext();

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1150) {
                setSidebarClosed(true);
            }
            else {
                setSidebarClosed(false);
            }
        });
    })
        

    return (
        <header className={styles.header}>
            {console.log(sidebarClosed)}
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