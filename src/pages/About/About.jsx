import React, { useState } from 'react'
import { Header } from '/src/components/Header/Header'
import { Footer } from '/src/components/Footer/Footer'
import mainIcon from '/public/beans.svg'
import Typist from 'react-typist-component'

export const About = () => {

    return (
        <div className='pageLayout'>
            <Header />
            <div className='messageBox'>
                <div className='message user'>Tell me about yourself</div>
                <div className='message response'>
                    <img src={mainIcon}/>
                    <Typist typingDelay={0} startDelay={500}>
                        <div className='content'>
                            <body>Sure! Here's a brief introduction of myself:</body>
                            <hr></hr>
                            <h3>About Me</h3>
                            <h4>Who I am</h4>
                            <ul>
                                <li>My name is Jennifer Yoon, a software engineer in London, Ontario.</li>
                                <li>I graduated with a Bachelor's degree from Western University, studying <b>Computer Science</b> and <b>Data Science</b>.</li>
                            </ul>
                            <h4>What I do</h4>
                            <ul>
                            <li>I specialize in <b>full-stack development</b> and work with technologies like <b>React, Node.js, </b> and <b>REST</b> to create efficient, scalable, and user-friendly web applications.</li>
                            <li>I  have experience in industry-level database management with <b>MySQL, PostgreSQL,</b> and <b>Oracle</b>.</li>
                            <li>I enjoy learning new technologies to build onto my skill set. Currently, I am pursuing certificates in <b>machine learning</b> and <b>cybersecurity</b>.</li>
                            </ul>
                            <h4>My career aspirations</h4>
                            <ul>
                                <li>I aim to bring together my diverse knowledge stack to offer a unique perspective on solving complex problems.</li>
                                <li>I value keeping an open mind and staying curious. I am always looking for challenges and inspiration to drive my personal and professional growth.</li>
                            </ul>
                        </div>
                    </Typist>
                </div>
            </div>
            <Footer />
        </div>
    )
}