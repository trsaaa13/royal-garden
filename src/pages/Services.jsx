import React from 'react';

import Start from "../components/Start";
import Gallery from '../components/Gallery';
import ServiceTestimonials from "../components/ServiceTestimonials";
import Partners from '../components/Partners';

import worker from '../img/radnik.jpg';
import stadion1 from '../servicesImg/stadion1.jpg';
import stadion2 from '../servicesImg/stadion2.jpg';
import stadion3 from '../servicesImg/stadion3.jpg';
import stadion4 from '../servicesImg/stadion4.jpg';
import stadion5 from '../servicesImg/stadion5.jpg';
import akva1 from '../servicesImg/akva1.jpg';
import akva2 from '../servicesImg/akva2.jpg';
import akva3 from '../servicesImg/akva3.jpg';
import akva4 from '../servicesImg/akva4.jpg';
import akva5 from '../servicesImg/akva5.jpg';
import komplex1 from '../servicesImg/komplex1.jpg';
import komplex2 from '../servicesImg/komplex2.jpg';
import komplex3 from '../servicesImg/komplex3.jpg';
import komplex4 from '../servicesImg/komplex4.jpg';
import mangir1 from '../servicesImg/mangir1.jpg';
import mangir2 from '../servicesImg/mangir2.jpg';
import mangir3 from '../servicesImg/mangir3.jpg';
import mangir4 from '../servicesImg/mangir4.jpg';
import kuca1 from '../servicesImg/kuca1.jpg';
import kuca2 from '../servicesImg/kuca2.jpg';
import kuca3 from '../servicesImg/kuca3.jpg';
import kuca4 from '../servicesImg/kuca4.jpg';

const stadionArr = [ stadion1, stadion2, stadion3, stadion4, stadion5 ];
const akvaArr = [ akva1, akva2, akva3, akva4, akva5 ];
const komplexArr = [ komplex1, komplex2, komplex3, komplex4 ];
const mangirArr = [ mangir1, mangir2, mangir3, mangir4 ];
const kucaArr = [ kuca1, kuca2, kuca3, kuca4 ];

document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';

function Services() {
  return (
    <>
      <Start />
      <main className='main services-page-hero'>
        <div className="wrapper">
          <h1 className="hero-title single-image-hero-title transformed-down">
              Pobeda je <span className="d-block">u Vašem</span> <span className="yellow cursive">Dvorištu</span>{" "}
          </h1>
        </div>
      </main>
      <section className='about-us tree-intro'>
        <div className="wrapper">
          <h3 className='cursive'>Vaša vizija + naša stručnost = <span className='yellow upper'>dvorište iz snova</span></h3>
          <p>Uređeno dvorište ostavlja prvi dobar utisak na Vaše posetioce i klijente. Ne dozvolite da taj utisak bude loš. Prepustite uređenje Vašeg dvorišta <span className="yellow">profesionalcima iz Royal Garden Milenković</span>!</p>
        </div>
      </section>
      <section className='list-of-services'>
        <div className="wrapper">
          <h2 className="title transformed-up">
            Naše <span className="d-block cursive yellow">Usluge</span>
          </h2>
          <ul className='yellow'>
            <li>Planiranje</li>
            <li>Dizajn</li>
            <li>Idejno rešenje</li>
            <li>Upravljanje projektom</li>
            <li>Izvođenje radova</li>
            <li>Održavanje</li>
            <li>Hortikultura</li>
            <li>Nivelacija</li>
            <li>Drenaža</li>
            <li>Irigacija</li>
            <li>Busen trava</li>
            <li>Uklanjanje korova</li>
            <li>Dekorativni kamen</li>
            <li>Dekorativni malč</li>
            <li>Prskalice</li>
            <li>Fontane</li>
            <li>Živa ograda</li>
            <li>Pešačke staze</li>
            <li>Zeleni zidovi</li>
            <li>Tepih trava</li>
            <li>Sadnja cveća</li>
            <li>Sadnja drveća</li>
            <li>Dekorativno žbunje</li>
          </ul>
          <p className='cursive text-center'>I još mnogo toga po želji kupaca...</p>
        </div>
      </section>
      <section className='our-team'>
        <div className="wrapper">
          <h2 className="title transformed-up">
            Naš <span className="d-block cursive black">Tim</span>
          </h2>
          <div className="black d-flex">
            <p className='worker'>Naš tim za uređenje dvorišta i parkova čine <span className="gray">vrhunski stručnjaci sa višedecenijskim iskustvom</span>, spremni da se uhvate u koštac sa svakim izazovom. Od ideje do realizacije, poput umetnika, oni prave divne skulpture koje će ulepšati Vaš životni prostor.</p>
            <img className='worker-img' src={worker} alt="radnik na odrzavanju" />
          </div>
        </div>
      </section>
      <section className='technology'>
        <div className="wrapper">
          <h2 className="title black cursive">
            Savremena <span className="d-block">Tehnologija</span>
          </h2>
          <p>Royal Garden Milenković je kompanija posvećena inovacijama. U našem radu <span className='yellow'>primenjujemo najsavremeniju tehnologiju</span> poput senzora za vlagu, automatskog zalivanja, kompjuterskog monitoringa...</p>
          <div className='yellow text-center tech-copy'>Upravljajte svojim vrtom sa bilo kog mesta uz pomoć Vašeg telefona</div>
        </div>
      </section>
      <section className='yard-types'>
        <div className="services-gallery-wrapper">
          <h2 className="title transformed-up">
            Neki od naših <span className="d-block cursive yellow">Radova</span>
          </h2>
          <div className="services-gallery">
            <h3 className="cursive title">Gradski stadion u Leskovcu</h3>
            <Gallery images={stadionArr} width={400} />
          </div>
          <div className="services-gallery aqua-gallery">
            <h3 className="cursive title">Aqua park Leskovac</h3>
            <Gallery images={akvaArr} width={500} />
          </div>  
          <div className="services-gallery">
            <h3 className="cursive title">Kompleks Apostolović</h3>
            <Gallery images={komplexArr} width={400} />
          </div>  
          <div className="services-gallery">
            <h3 className="cursive title">Mangir</h3>
            <Gallery images={mangirArr} width={400} />
          </div>  
          <div className="services-gallery aqua-gallery">
            <h3 className="cursive title">Kuća sa bazenom</h3>
            <Gallery images={kucaArr} width={500} />
          </div>  
        </div>    
      </section>
      <ServiceTestimonials />
      <Partners />
    </>
  )
}

export default Services;