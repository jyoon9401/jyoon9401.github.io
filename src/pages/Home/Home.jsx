import React, { useState } from 'react'
import styles from './Home.module.css'
import { Header } from  '/src/components/Header/Header'
import { Footer } from '/src/components/Footer/Footer'
import aboutIcon from '/src/assets/home/user.png'
import workIcon from '/src/assets/home/suitcase.png'
import skillsIcon from '/src/assets/home/wand.png'
import contactIcon from '/src/assets/home/phone.png'
import Typist from 'react-typist-component'
import { Link } from 'react-router-dom'

export const Home = () => {

    const cardItems = [
        { name: 'about', path: '/about', text: 'Learn about me', icon: aboutIcon },
        { name: 'experience', path: '/experience', text: 'See my experiences', icon: workIcon },
        { name: 'skills', path: '/skills', text: 'View my skills', icon: skillsIcon },
        { name: 'contact', path: '/contact', text: 'Connect with me', icon: contactIcon }
    ]

    return (
        <div className='pageLayout'>
            <Header />
            <div className={styles.homePage}>
                <div className={styles.title}>
                    <Typist typingDelay={30}>
                        Welcome to my portfolio
                    </Typist>
                </div>
                <section className={styles.contentCards}>
                    {cardItems.map((item) => (
                        <Link to={item.path}>
                            <div className={styles.card}>
                                <img src={item.icon}/>
                                <body>{item.text}</body>
                            </div>
                        </Link>
                    ))}

                </section>


            </div>
            <Footer />
        </div>
    )
}
