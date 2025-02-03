import React, { useState } from 'react'
import { Header } from '/src/components/Header/Header'
import { Footer } from '/src/components/Footer/Footer'
import mainIcon from '/public/beans.svg'
import Typist from 'react-typist-component'

export const Skills = () => {

    return (
        <div className='pageLayout'>
            <Header />
            <div className='messageBox'>
                <div className='message user'>What technical skills do you know?</div>
                <div className='message response'>
                    <img src={mainIcon}/>
                    <Typist typingDelay={0} startDelay={500}>
                        <div className='content'>
                            <body>Here's a rundown of my technical stack:</body>
                            <hr></hr>
                            <h4>Front-End Skills</h4>
                            <ul>
                                <li><b>Languages: </b>JavaScript, HTML/CSS</li>
                                <li><b>Libraries/Frameworks: </b>React, Angular, Next.js</li>
                            </ul>
                            <hr></hr>
                            <h4>Back-End Skills</h4>
                            <ul>
                                <li><b>Languages: </b>Java, C++</li>
                                <li><b>Frameworks: </b>Spring Boot, Spring Batch</li>
                                <li><b>Databases: </b>MySQL, PostgreSQL, Oracle</li>
                                <li><b>Tools: </b>Docker, Jenkins, Maven, Swagger</li>
                            </ul>
                            <hr></hr>
                            <h4>Machine Learning Skills</h4>
                            <ul>
                                <li><b>Languages: </b>Python, R</li>
                                <li><b>Libraries/Frameworks: </b>Tensorflow, PyTorch, Keras, OpenCV</li>
                            </ul>
                            <hr></hr>
                            <h4>Other Skills</h4>
                            <ul>
                                <li><b>Tools:</b> Git, Jira</li>
                            </ul>
                            <hr></hr>
                            <body>This is my skill set up to date. I'm always eager to learn more and keep up with the latest tech!</body>

                        </div>
                    </Typist>
                </div>
            </div>
            <Footer />
        </div>
    )
}