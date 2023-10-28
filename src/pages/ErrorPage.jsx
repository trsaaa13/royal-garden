import React from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../img/logo-dark1.jpg'

function ErrorPage({onLink}) {
  return (
    <main className='error-container wrapper text-center'>
        <Link to="/"><img src={logoDark} alt="logo" /></Link>
        <h1 className='yellow'>Greška!</h1>
        <h3 className='cursive'>Nažalost, ne možemo naći stranicu koju tražite.</h3>
        <Link to="/" onClick={onLink}>Nazad na početnu stranicu</Link>
    </main>
  )
}

export default ErrorPage;