import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import {
    faNode,
    faCss3Alt,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Sou desenvolvedor front-end em formação Web FullStack pelo bootcamp da Labenu, tendo experiências práticas, individuais e em grupo, utilizando tecnologias como HTML, CSS, JavaScript, Node, Git e ReactJS.
                </p>
                <p>
                    Sou tranquilo, confiante, naturalmente curioso e sempre trabalhando para melhorar minhas habilidades, um problema de design por vez.
                </p>
                <p>
                     Iniciei minha transição de carreira por ser obcecado por tecnologia e observando o trabalho de desenvolvedores na rede.
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faNode} color="#3C823B" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>                    
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About