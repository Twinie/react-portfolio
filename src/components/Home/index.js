import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-t.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Photo from '../Photo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['w', 'i', 'n', 'k', 'l', 'e']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>

                    <br/> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    
              
                <img src={LogoTitle} alt='developer' />
                  <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                  <Photo />
                <br />
                </h1>
                <h2>Frontend Developer | Javascript | ReactJS</h2>
                <Link to="/contact" className="flat-button">
                    Contact Me
                </Link> 
                
            </div>
        </div>
    )
}

export default Home;