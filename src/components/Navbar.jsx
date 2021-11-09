import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Button } from './Button.jsx';
import './Navbar.css';
import {ReactComponent as VideoGameSVG} from '../svg/videogame.svg'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const aoClicar = () => setClick(!click);
    const fecharMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <=960){
            setButton(false);
        }else{
            setButton(true);
        }

    };

    useEffect(() =>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className="navbar" id="nav">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={fecharMenu}>
                        NeoGaming <VideoGameSVG />

                    </Link> {/*Link substitui o <a>*/}
                    <div className="menu-icon" onClick={aoClicar}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                        <Link to='banner' smooth={true} className='nav-links' onClick={fecharMenu}>
                            Home
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='cards-news' smooth={true} className='nav-links' onClick={fecharMenu}>
                                Novidades
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='calendar' smooth={true} className='nav-links' onClick={fecharMenu}>
                                Calendario
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links-mobile' onClick={fecharMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="button-outline">Sign Up</Button>}
                </div>

            </nav>
        </>
    )
}


export default Navbar
