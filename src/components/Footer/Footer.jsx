import React, { useState } from 'react'

import styles from './Footer.module.css'
import mailIcon from '/src/assets/footer/mail.png'
import linkedinIcon from '/src/assets/footer/linkedin.png'
import githubIcon from '/src/assets/footer/github.png'

export const Footer = () => {

    return (
        <div className={styles.footer}>
            <input type='text' placeholder='Enter message ...'/>
            <div className={styles.footerLinks}>
                <a href=''><img src={mailIcon} /></a>
                <a href=''><img src={linkedinIcon} /></a>
                <a href=''><img src={githubIcon} /></a>
            </div>        
        </div>
    )
}