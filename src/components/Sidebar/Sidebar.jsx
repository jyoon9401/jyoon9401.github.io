import React, { useState } from 'react'

import styles from './Sidebar.module.css'
import sidebarIcon from '/src/assets/sidebar/sidebar.png'
import { useSidebarContext } from '../SidebarContext/SidebarContext'

export const Sidebar = () => {

    const [sidebarClosed, setSidebarClosed] = useSidebarContext();

    return (
        <nav className={`${styles.sidebar} ${sidebarClosed && styles.closed}`}>
            <img
                className={styles.sidebarBtn}
                src={sidebarIcon}
                onClick={() => setSidebarClosed(true)}/>
            <ul className={styles.sidebarItems}>
                <li>
                    <small>About</small>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <small>Work</small>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#resume">Resume</a>
                </li>
                <li>
                    <small>Contact</small>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}