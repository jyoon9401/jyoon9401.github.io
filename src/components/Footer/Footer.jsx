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
                <a href='mailto:jyoon9401@gmail.com'><img src={mailIcon} alt='Email'/></a>
                <a href='https://www.linkedin.com/in/jennifer-jy-yoon/' target='_blank'><img src={linkedinIcon} alt='LinkedIn' /></a>
                <a href='https://github.com/jyoon9401' target='_blank'><img src={githubIcon} alt='Github' /></a>
            </div>        
        </div>
    )
}