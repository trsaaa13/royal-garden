import React from "react";
import { Link } from "react-router-dom";

import { FaCheckCircle } from "react-icons/fa";

import Start from "../components/Start";
import WhyUs from "../components/WhyUs";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import FindUs from "../components/FindUs";
import Partners from "../components/Partners";

import kaliopa from "../productsImg/kaliopa1.jpg";
import verbena from "../productsImg/verbena3.jpg";
import hrizantema from "../productsImg/hrizantema3.jpg";

import gallery1 from "../img/gallery1.jpg"
import gallery2 from "../img/gallery2.jpg"
import gallery3 from "../img/gallery3.jpg"
import gallery4 from "../img/gallery4.jpg"
import gallery5 from "../img/gallery5.jpg"
import gallery6 from "../img/gallery6.jpg"
import gallery7 from "../img/gallery7.jpg"
import gallery8 from "../img/gallery8.jpg"

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];


function Home({onLink}) {
  return (
    <>
      <Start />
      <Hero length={4} page={"home"}/>
      <section className="about-us">
        <div className="wrapper">
          <h1 className="hero-title">
              Royal <span className="d-block">Garden</span>{" "}
              <span className="yellow">Milenković</span>
          </h1>
          <Link className="link-btn" to="/o-nama" onClick={onLink}>
            Više o nama
          </Link>
          <h3 className="cursive yellow">Dobro došli u naše carstvo!</h3>
          <p>
            Mi smo rasadnik sa tradicijom i iskustvom. Jedna od{" "}
            <span className="yellow">najvećih industrija cveća i četinara</span>{" "}
            na jugu Srbije.
          </p>
          <p>
            Nudimo Vam <span className="yellow">širok izbor svežeg cveća</span>{" "}
            za sve prilike. Bilo da želite da obradujete voljenu osobu omiljenim cvetom ili ulepšate Vaš dom ili baštu, imamo sve što Vam je
            potrebno da Vaša ideja zaživi.
          </p>
        </div>
      </section>
      <section className="our-work">
        <div className="wrapper">
          <h2 className="title transformed-up">
            Naše <br /> <span className="black">Delatnosti</span>
          </h2>
          <ul className="black">
            <li>
              <FaCheckCircle /> <span>Uređenje i održavanje dvorišta i parkova</span> 
            </li>
            <li>
              <FaCheckCircle /> <span>Ugradnja sistema za zalivanje</span>  
            </li>
            <li>
            <FaCheckCircle /> <span>Proizvodnja i prodaja:</span> 
            </li>
            <li className="nested-li">
              🌸  Cveća
            </li>
            <li className="nested-li">
              🌱 Rasada
            </li>
            <li className="nested-li">
              🌲 Četinara
            </li>
            <li className="nested-li">
              🍁 Lišćara
            </li>
          </ul>
        </div>
      </section>
      <section className="gallery black">
        <div className="home-gallery-wrapper">
          <h2 className="title">
            <span>Parkovi</span> <br />{" "}
            <span className="cursive">I Dvorišta</span>
          </h2>
          <div className="home-gallery d-flex">
            <Gallery images={images} width={560} />
            <div className="parks-copy">
              Uređeno dvorište ostavlja prvi dobar utisak o Vama. Mi u rasadniku Milenković tretiramo dvorišta naših klijenata kao svoje. Da bismo izašli u susret Vašim jedinstvenim potrebama, za svakog klijenta kreiramo <span className="gray">poseban program</span> i nudimo <span className="gray">najbolja rešenja</span>. Dugogodišnje iskustvo i stručnost u ovoj oblasti razlog su što naše ime stoji iza nekih od <span className="gray">najlepših vrtova</span> u gradu, ali i novog gradskog fudbalskog stadiona u Leskovcu.
              <Link className="link-btn" to="/naše-usluge" onClick={onLink}>
                Saznajte više
              </Link>
            </div>
          </div>
          <h3 className="cursive text-center gray">Vaša vizija + naša stručnost = dvorište iz snova</h3>
          <div className="caricin-grad">
            <h2>Jedan od naših projekata</h2>
            <iframe width="560" height="500" src="https://www.youtube-nocookie.com/embed/0Y6y8WwQJW4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <WhyUs />
      <section className="our-products">
        <h2 className="title transformed-down">
          Naše <br /> <span className="yellow">Cveće</span>
        </h2>
        <div className="products-display">
          <div className="first-img">
            <Link to='/naše-cveće/hrizantema' onClick={onLink}><img src={hrizantema} alt="hrizantema"/></Link>
          </div>
          <div className="middle-img">
            <Link to='/naše-cveće/kaliopa' onClick={onLink}><img src={kaliopa} alt="kaliopa"/></Link>
          </div>
          <div className="fake-img">&nbsp;</div>
          <div className="last-img">
            <Link to='/naše-cveće/viseća%20verbena' onClick={onLink}><img src={verbena} alt="verbena" /></Link>
          </div>
        </div>
        <Link className="link-btn" to="/naše-cveće" onClick={onLink}>
          Vidite sve
        </Link>
      </section>   
      <Testimonials />
      <Partners />
      <FindUs />
    </>
  );
}

export default Home;
