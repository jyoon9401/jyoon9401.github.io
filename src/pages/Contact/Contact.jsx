import React, { useEffect, useState } from 'react'
import { Header } from '/src/components/Header/Header'
import { Footer } from '/src/components/Footer/Footer'
import mainIcon from '/public/beans.svg'
import Typist from 'react-typist-component'

export const Contact = () => {

    const [showDelay, setShowDelay] = useState(false);
    useEffect(() => {
        setTimeout(() => {
         setShowDelay(true);
        }, 2000);
    })

    return (
        <div className='pageLayout'>
            <Header />
            <div className='messageBox'>
                <div className='message user'>Where could I see your resume?</div>
                <div className='message response'>
                    <Typist typingDelay={0} startDelay={500}>
                    <img src={mainIcon}/>
                        <div className='content'>
                            <body>You can view my resume <a href=''>here </a> for a more detailed overview of my experience, skills, and projects.</body>
                        </div>
                    </Typist>
                </div>
                <div className='message user' style={{visibility: showDelay ? 'visible' : 'hidden'}}>How can I reach you if I have any questions?</div>
                <div className='message response'>
                    <Typist typingDelay={0} startDelay={3500}>
                    <img src={mainIcon}/>
                        <div className='content'>
                            <body>If you have any questions or would like to connect, here are the best ways to reach out to me:</body>
                            <ul>
                                <li>Send me an <a href='mailto:jyoon9401@gmail.com'>email</a></li>
                                <li>Connect with me on <a href='https://www.linkedin.com/in/jennifer-jy-yoon/' target='_blank'>LinkedIn</a></li>
                                <li>View my work on <a href='https://github.com/jyoon9401' target='_blank'>Github</a></li>
                            </ul>
                            <body>I'm always open for conversations, whether they are professional discussions or casual chats. Feel free to reach out anytime!</body>

                        </div>
                    </Typist>
                </div>

            </div>
            <Footer />
        </div>
    )
}