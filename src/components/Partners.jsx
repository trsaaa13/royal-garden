import React from 'react';
import grad from '../img/grad-grb.png';
import fk from '../img/fk-dubocica.png';
import aqua from '../img/aqua-park.png';
import statovac from '../img/statovac.png';

document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';

function Partners() {
  return (
    <section className='partners'>
        <div className="wrapper">
           <h2 className="title transformed-up">
            Naši <br /> <span className="yellow">Partneri</span>
          </h2>
          <div className="d-flex partner-imgs">
            <a href="https://novi.gradleskovac.org/en/" target='_blank' rel="noreferrer"><img src={grad} alt="grb grada Leskovca" /></a>
            <a href="https://sr.wikipedia.org/wiki/%D0%93%D0%A4%D0%9A_%D0%94%D1%83%D0%B1%D0%BE%D1%87%D0%B8%D1%86%D0%B0" target='_blank' rel="noreferrer"><img src={fk} alt="grb fk Dubočica" /></a>
            <a href="https://www.facebook.com/aquaparkatina/" target='_blank' rel="noreferrer"><img src={aqua} alt="logo akva parka" /></a>
            <a href="https://www.statovac.com/naslovna/" target='_blank' rel="noreferrer"><img src={statovac} alt="logo statovac" /></a>
          </div>
        </div>
    </section>
  )
}

export default Partners;