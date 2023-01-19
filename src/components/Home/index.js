import LogoTitle from "../../assets/images/logom.png"
import LogoB from "../../assets/images/logob.png"
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import LogoMB from "../../assets/images/logomb.png"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 7000)
  }, [])

  const nameArray = ['a', 'r', 'c', 'e', 'l', 'o', ' ']
  const fullNameArray = ['i', 'g', 'a', 'r', 'a', 'm,']
  const jobArray = [
    's',
    'o',
    'u',
    ' ',
    'd',
    'e',
    's',
    'e',
    'n',
    'v',
    'o',
    'l',
    'v',
    'e',
    'd',
    'o',
    'r',
    ' ',
    'w',
    'e',
    'b',
    '.'
  ]

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>O</span>
            <span className={`${letterClass} _12`}>l</span>
            <span className={`${letterClass} _13`}>á,</span>
            <br />
            <span className={`${letterClass} _14`}>M</span>
            <span className={`${letterClass} _15`}>e</span>
            <span className={`${letterClass} _16`}>u </span>
            <span> </span>
            <span className={`${letterClass} _17`}>N</span>
            <span className={`${letterClass} _18`}>o</span>
            <span className={`${letterClass} _19`}>m</span>
            <span className={`${letterClass} _20`}>e </span>
            <span> </span>
            <span className={`${letterClass} _21`}>é</span>
            <br />
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={22}
            />
            <img className="biga" src={LogoB} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={fullNameArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={27}
            />
          </h1>
          <h2>Desenvolvedor Full Stack</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="logo-container"
        >
          <img
            className="solid-logo"
            src={LogoMB}
            alt="JavaScript,  Developer"
          />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}


export default Home