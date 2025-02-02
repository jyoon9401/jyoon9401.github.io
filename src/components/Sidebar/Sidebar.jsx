import React, { useEffect, useState } from 'react'

import styles from './Sidebar.module.css'
import sidebarIcon from '/src/assets/sidebar/sidebar.png'
import { useSidebarContext } from '../SidebarContext/SidebarContext'
import { useLocation } from 'react-router-dom'

export const Sidebar = () => {

    const [sidebarClosed, setSidebarClosed] = useSidebarContext();
    const location = useLocation();

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
        <nav className={`${styles.sidebar} ${sidebarClosed && styles.closed}`}>
            <img
                className={styles.sidebarBtn}
                src={sidebarIcon}
                onClick={() => setSidebarClosed(true)}
                alt='Sidebar icon'
            />
            <ul className={styles.sidebarItems}>
                <li>
                    <small>About</small>
                    <a href='/about' className={location.pathname === '/about' ? styles.activePage : ''}>About Me</a>
                </li>
                <li>
                    <small>Work</small>
                    <a href='/experience' className={location.pathname === '/experience' ? styles.activePage : ''}>Experience</a>
                    <a href='/skills' className={location.pathname === '/skills' ? styles.activePage : ''}>Skills</a>
                </li>
                <li>
                    <small>Contact</small>
                    <a href='/contact' className={location.pathname === '/contact' ? styles.activePage : ''}>Get In Touch</a>
                </li>
            </ul>
        </nav>
    )
}