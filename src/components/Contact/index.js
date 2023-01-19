import './index.scss'
import LoveCoffee from "../../assets/images/coffee.png"
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope,
    
} from '@fortawesome/free-solid-svg-icons'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <ul>
                        <li className="contact-social">
                            <div className="flex">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    color="#4d4d4e"
                                    className="anchor-icon-contact"
                                />
                                <p>
                                    mbigaram.mb@gmail.com
                                </p>
                            </div>
                        </li>
                        <li className="contact-social">
                            <div className="flex">
                                <FontAwesomeIcon
                                    icon={faWhatsapp}
                                    color="#4d4d4e"
                                    className="anchor-icon-contact"
                                />
                                <p>
                                    +55 19 999864472
                                </p>
                            </div>
                        </li>
                        <li className="contact-social">
                            <a className="flex"
                                href="https://twitter.com/BigaramMarcelo"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    color="#4d4d4e"
                                    className="anchor-icon-contact"
                                />
                                <p>
                                    @BigaramMarcelo
                                </p>
                            </a>
                        </li>
                        <li className="contact-social">
                            <a className="flex"
                                href="https://www.linkedin.com/in/marcelo-bigaram/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    color="#4d4d4e"
                                    className="anchor-icon-contact"
                                />
                                <p>
                                    linkedin.com/in/marcelo-bigaram
                                </p>
                            </a>
                        </li>
                        <li className="contact-social">
                            <a className="flex"
                                href="https://github.com/mbigaram"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon-contact"
                                />
                                <p>
                                    github.com/mbigaram
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="by-zone">
                    Designed and built by Marcelo with Love & Coffee
                    <div className="love-coffee">
                    
                    <img 
                    src={LoveCoffee}
                    alt="Coffee"
                     />
                    </div>
                    
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )

}

export default Contact