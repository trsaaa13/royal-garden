import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { hrizanteme } from '../data/hrizanteme';

function Hrizantema({onLink}) {
  return (
    <section className='hrizantema-container'>
        <div className="wrapper">
            <h2 className='yellow cursive text-center'>Naše Hrizanteme</h2>
            <ul className='products-display-ul d-flex'>
                {hrizanteme.map( item => (
                    <li key={item.name} className='text-center'>
                        <Link to={`/naše-cveće/${item.name}`} onClick={onLink}>
                            <img src={item.img[0]} alt={item.name} />
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='text-center'>
                <Link className="link-btn d-flex" to="/naše-cveće">
                    <FaArrowLeft /> <span>Nazad</span> 
                </Link>
          </div>
        </div>
    </section>
  )
}

export default Hrizantema