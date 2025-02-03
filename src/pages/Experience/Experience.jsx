import React, { useState } from 'react'
import { Header } from '/src/components/Header/Header'
import { Footer } from '/src/components/Footer/Footer'
import mainIcon from '/public/beans.svg'
import Typist from 'react-typist-component'

export const Experience = () => {

    return (
        <div className='pageLayout'>
            <Header />
            <div className='messageBox'>
                <div className='message user'>Describe your professional experience</div>
                <div className='message response'>
                    <img src={mainIcon}/>
                    <Typist typingDelay={0} startDelay={500}>
                        <div className='content'>
                            <body>Here's a breakdown of my professional experience:</body>
                            <hr></hr>
                            <h4>1. Python Developer @ Western Cyber Society</h4>
                            <small>Oct. 2024 - Present</small>
                            <ul>
                                <li>I am building a gradient boosting model using <b>Keras</b> and <b>LightGBM</b> on a <b>Linux</b> environment to detect credit card fraud activity
                                in large transaction datasets.</li>
                                <li>I completed IBM training courses focused on Mainframe technology, z/OS architecture, and JCL scripting.</li>
                            </ul>
                            <hr></hr>
                            <h4>2. Software Developer Intern @ J.D. Power</h4>
                            <small>May 2022 - Aug. 2023</small>
                            <ul>
                                <li>I built a web application using <b>React, Next.js,</b> and <b>Material UI</b> to create a dynamic interface for managing the company's databases. This allowed
                                employees to interact with complex data without requiring coding knowledge, improving overall accessibility and efficiency.</li>
                                <li>On the backend, I designed and integrated <b>RESTful APIs</b> using <b>Spring Boot</b> to streamline CRUD operations on <b>MySQL</b> and <b>PostgreSQL </b>
                                databases.</li>
                                <li>I automated error reporting for <b>Spring Batch ETL pipelines</b> and built a real-time monitoring UI using JavaScript, which reduced troubleshooting time
                                by 80%.</li>
                                <li>I used <b>Docker</b> to containerize applications, standardizing deployments across development, production, and QA environments and streamlining CI/CD workflow.</li>
                            </ul>
                            <hr></hr>
                            <h4>3. Executive Member @ Western University Korean Students’ Association</h4>
                            <small>May 2022 - Aug. 2023</small>
                            <ul>
                                <li>I demonstrated organizational and leadership skills by planning the weekly team meetings and semi-annual association gatherings.</li>
                                <li>I arranged and budgeted events, communicating with other student associations and third-party sponsors/vendors.</li>
                            </ul>
                        </div>
                    </Typist>
                </div>
            </div>
            <Footer />
        </div>
    )
}