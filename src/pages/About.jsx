import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

import Start from "../components/Start";
import NumCounter from '../components/NumCounter';
import FindUs from '../components/FindUs';
import Partners from '../components/Partners';

import nenad from '../img/nenad.jpg';


function About() {
  return (
    <>
      <Start />
      <main className="main about-page-hero">
        <div className="wrapper">
          <h1 className="hero-title single-image-hero-title transformed-down">
              Rasadnik <span className="d-block">sa</span> <span className="yellow cursive">Tradicijom</span>{" "}
          </h1>
        </div>
      </main>
      <section className='our-intro about-us'>
        <div className="wrapper">
          <h3 className='cursive'>Dobro došli u <span className='yellow'>ROYAL GARDEN MILENKOVIĆ</span>!</h3>
          <p>Mi smo <span className='yellow'>vodeći snabdevač</span> visoko kvalitetnog cveća i četinara na jugu Srbije i vrhunski profesionalci za uređenje dvorišta, vrtova i parkova.</p>
          <p>Biljke iz našeg rasadnika uzgajaju se s velikom pažnjom i posvećenošću svih naših zaposlenih, u zaštićenim uslovima, uz upotrebu najnovijih agro-tehničkih mera kako bi se našim kupcima pružio <span className='yellow'>proizvod vrhunskog kvaliteta</span>.</p>
        </div>  
      </section>
      <section className='our-story black'>
        <div className="wrapper">
          <div className="big-num-container d-flex transformed-up">
            <NumCounter target={25} duration={1500}/>
            <div className='yellow'>
              Godina <span className='black d-block'>sa Vama</span> 
            </div>
          </div>
          <h2 className="title transformed-up">
            Naša <span className="d-block cursive">Priča</span>
          </h2>
          <div className='beginnings'>
            <p>Naša priča počinje pre oko 25 godina kada <span className="gray">Nenad Milenković</span>, po struci veterinar, odlučuje da pokrene <span className="gray">porodični biznis</span>. Na sopstvenom imanju u selu Turekovac nedaleko od Leskovca počelo se skromno, sa par vrsta cveća. Od samog početka Nenadu je u poslu nesebično pomagala <span className="gray">supruga Biljana</span> a kasnije i svo troje njihove dece.</p>
            <div className='nenad-quote text-center'>
              <img src={nenad} alt="Nenad Milenković" />
              <div className='text-center'> <em>"Nema lepšeg posla na svetu nego družiti se sa biljkama. Moje biljke ne rađaju ali hrane dušu"</em>  <span className='gray'>- Nenad Milenković</span></div>
            </div>
            <p>Vremenom se asortiman cveća uvećavao ali i <span className='gray'>širila delatnost</span> kompanije. Marljivim radom i zalaganjem rasadnik Milenković postao je jedan od najvećih na jugu Srbije. Danas poslujemo širom Srbije i okruženja i zapošljavamo desetine radnika. <span className='gray'>Naše ime je sinonim za kvalitet</span> u oblasti proizvodnje cveća, četinara i uređenja prostora. </p>
          </div>
        </div>
      </section>
      <section className='square-meters'>
        <div className="wrapper">
          <div className="big-num-container smaller-nums d-flex transformed-up">
            <NumCounter target={400} duration={1500}/>
            <div className='black'>
              Ari pod<span className='d-block yellow'>biljkama</span> 
            </div>
          </div>
          <ul className='transformed-up text-center'>
            <li><span className='yellow'>0.5 ha</span> pod cvećem</li>
            <li><span className='yellow'>2 ha</span> pod četinarima</li>
            <li><span className='yellow'>1.5 ha</span> pod lišćarima</li>
          </ul>
        </div>
      </section>
      <section className='mission our-work'>
        <div className="wrapper">
          <h2 className="title transformed-up">
            Naša <span className="d-block cursive black">Misija</span>
          </h2>
          <p className='black'>Misija <strong>Royal Garden Milenković</strong> je da kreira životno okruženje koje usrećuje i inspiriše. Kroz našu posvećenost izvrsnosti, kvalitetne biljke i obraćanje pažnje na svaki detalj, stvaramo personalizovana i održiva rešenja koja unapređuju Vaš život.</p>
        </div>
      </section>
      <section className='testimonials transparent-testimonial'>
        <div className="wrapper">
          <div className="big-num-container big-num-container-right d-flex transformed-up">
            <div className='black'>
              Više od<span className='d-block yellow'>vrsta cveća</span> 
            </div>
            <NumCounter target={70} duration={1500}/>
          </div>
        </div>
      </section>
      <section className='sales testimonials'>
        <div className="wrapper">
          <h2 className="title transformed-up">
              Prodajna <span className="d-block cursive yellow">Mesta</span>
          </h2>
          <ul>
            <li><FaCheckCircle className='yellow'/> Rasadnik u Turekovcu</li>
            <li><FaCheckCircle className='yellow'/> Tržnica Leskovac <small>(subotom)</small></li>
            <li><FaCheckCircle className='yellow'/> Tržnica Vlasotince <small>(petkom)</small></li>
            <li><FaCheckCircle className='yellow'/> Štand u centru grada <small >(8. mart i praznici)</small></li>
          </ul>
          <div className='total-sale d-flex'>
            <span>Više od</span>
            <NumCounter target={12000000} duration={2000}/>
            <span>prodatih sadnica</span>
          </div>
        </div>
      </section>
      <Partners  />
      <FindUs />
    </>
  )
}

export default About;