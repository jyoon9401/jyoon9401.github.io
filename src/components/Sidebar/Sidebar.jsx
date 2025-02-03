import React, { useEffect, useState } from 'react'

import styles from './Sidebar.module.css'
import sidebarIcon from '/src/assets/sidebar/sidebar.png'
import { useSidebarContext } from '../SidebarContext/SidebarContext'
import { Link, useLocation } from 'react-router-dom'

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
                    <Link to='/about' className={location.pathname === '/about' ? styles.activePage : ''}>About Me</Link>
                </li>
                <li>
                    <small>Work</small>
                    <Link to='/experience' className={location.pathname === '/experience' ? styles.activePage : ''}>Experience</Link>
                    <Link to='/skills' className={location.pathname === '/skills' ? styles.activePage : ''}>Skills</Link>
                </li>
                <li>
                    <small>Contact</small>
                    <Link to='/contact' className={location.pathname === '/contact' ? styles.activePage : ''}>Get In Touch</Link>
                </li>
            </ul>
        </nav>
    )
}