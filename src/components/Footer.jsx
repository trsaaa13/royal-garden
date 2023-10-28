import React from 'react';
import { Link } from 'react-router-dom';
import {FaArrowCircleUp} from 'react-icons/fa';
import logo from '../img/logo.png';

const year = new Date().getFullYear();

function scrollToTop(){
    window.scrollTo(0, 0);
}

function Footer() {
  return (
    <footer className="black">
        <div className="wrapper text-center">
            <Link to="/"><img src={logo} alt="logo" onClick={scrollToTop}/></Link>
            <p className='footer-copy'>
                Copyright <span className="footer-year">&copy; {year}</span> PR Royal Garden Milenković - Sva prava zadržana
            </p> 
            <div className="go-to-top" title='Idi na vrh' onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
                <FaArrowCircleUp />
            </div>
        </div>
        <p className="grass text-center"><small>Developed by:</small> <a href="https://marjan-zivkovic.com/" target='_blank' rel="noreferrer">Marjan</a></p>
    </footer>
  )
}

export default Footer;