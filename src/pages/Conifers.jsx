import React from 'react';
import { Link } from 'react-router-dom';

import cetinari from '../data/cetinari';
import liscari from '../data/liscari';
import zbunovi from '../data/zbunovi';
import Start from "../components/Start";
import Hero from '../components/Hero';
import NumCounter from '../components/NumCounter';

import {FaArrowUp, FaArrowDown} from 'react-icons/fa';


function Conifers({onLink}) {
  const sortedCetinari = cetinari.sort((a, b) => a.name.localeCompare(b.name));
  const sortedLiscari = liscari.sort((a, b) => a.name.localeCompare(b.name));
  const sortedZbunje = zbunovi.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Start />
      <Hero length={3} page={"trees"} />
      <section className='products-intro about-us tree-intro'>
        <div className="wrapper">
          <h1 className="hero-title trees-hero-title transformed-down">
              Drveće <span className="d-block">za svako</span> <span className="yellow cursive">Dvorište</span>{" "}
          </h1>
          <div className='tree-links'>
            <span className="link-btn" onClick={() => document.getElementById('četinari')?.scrollIntoView()} >
             Četinari
            </span>
            <span className="link-btn" onClick={() => document.getElementById('lišćari')?.scrollIntoView()}>
              lišćari
            </span>
            <span className="link-btn" onClick={() => document.getElementById('ukrasno-žbunje')?.scrollIntoView()}>
              žbunje
            </span>
          </div>
          <h3 className='cursive'>Osetite mirnoću našeg <span className='yellow'>zimzelenog i listopadnog</span> drveća!</h3>
          <p>Nudimo Vam širok izbor <span className="yellow">lišćara, četinara, dekorativnog žbunja,</span> od patuljastih formi do velikih džinova, u svim nijansama zelene, zlatno-žute, plave, plavo-sive i srebrne boje.</p>
        </div>
      </section>
      <section className='num-counter-on-conifers'>
        <div className="wrapper">
          <div className="big-num-container d-flex transformed-up">
            <div>
              Više od<span className='d-block black'>vrsta drveća</span> 
            </div>
            <NumCounter target={50} duration={1500}/>
          </div>
        </div>
      </section>
      <section className='conifers-container' id='četinari'>
        <div className="wrapper">
          <h2 className="title transformed-up black">
            Naši <span className="d-block cursive">Četinari</span>
          </h2>
          <p className='black tree-copy'>Naši četinari stoje uspravno i ponosno, nudeći Vam umirujuće <span className="gray">zelenilo tokom cele godine</span>. Veličanstveni borovi, smreke, tuje, čempresi će ne samo oplemeniti izgled Vašeg okruženja nego i <span className="gray">unaprediti kvalitet vazduha</span> koji udišete.</p>
          <p className="offers text-center black">Iz ponude izdvajamo</p>
          <ul className='products-display-ul d-flex'>
            {sortedCetinari.map( item =>(
              <li key={item.name} className='text-center'>
                <Link to={`/naše-drveće/${item.name}`} onClick={onLink}>
                  <img src={item.img[0]} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='deciduous-pic-container' id='lišćari'>
        <div className="deciduous-pic">&nbsp;</div>
      </section>
      <section className='deciduous-container'>
        <div className="wrapper">
          <h2 className="title transformed-up transformed-up-more">
            Naši <span className="d-block cursive">Lišćari</span>
          </h2>
          <p className='black tree-copy'>Osetite <span className="gray">lepotu promene godišnjih doba</span> uz našu bogatu kolekciju listopadnog drveća. Naši lišćari nude senku i privatnost i neizostavni su deo dobre pejzažne arhitekture. Nudimo Vam <span className="gray">širok izbor drveća</span> različitog kolorita lišća, cvetova i oblika krošanja.</p>
          <p className="offers text-center black">Iz ponude izdvajamo</p>
          <ul className='products-display-ul d-flex'>
            {sortedLiscari.map( item =>(
              <li key={item.name} className='text-center'>
                <Link to={`/naše-drveće/${item.name}`} onClick={onLink}>
                  <img src={item.img[0]} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='deciduous-pic-container' id='ukrasno-žbunje'>
        <div className="deciduous-pic bushes-pic">&nbsp;</div>
      </section>
      <section className='conifers-container'>
        <div className="wrapper">
          <h2 className="title transformed-up transformed-up-more">
            Ukrasno <span className="d-block cursive">Žbunje</span>
          </h2>
          <p className='black tree-copy'>Ulepšajte izgled Vaše bašte našom <span className="gray">bogatom kolekcijom dekorativnog žbunja</span>. Ukrasno žbunje može biti savršen dodatak Vašem vrtu, koji će označiti njegove granice i izazvati interesovanje prolaznika. U ponudi su <span className="gray">razne varijante zimzelenih i cvetnih grmova</span>, različitih boja, veličina i oblika.</p>
          <p className="offers text-center black">Iz ponude izdvajamo</p>
          <ul className='products-display-ul d-flex'>
            {sortedZbunje.map( item =>(
              <li key={item.name} className='text-center'>
                <Link to={`/naše-drveće/${item.name}`} onClick={onLink}>
                  <img src={item.img[0]} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='ask-for-more'>
        <div className="wrapper">
          <p className='cursive'>Ovo <FaArrowUp className='yellow'/> je samo deo asortimana drveća iz našeg rasadnika. Naša <span className='yellow'>ponuda se stalno obogaćuje</span>, stoga ako niste pronašli četinar, žbun ili lišćar koji tražite slobodno nas kontaktirajte. <FaArrowDown className='yellow'/></p>
        </div>
      </section>
    </>
  )
}

export default Conifers;