import React, {useState} from 'react';
import {FaFlask, FaComments, FaMoneyBillWave, FaShippingFast  } from 'react-icons/fa';
import kaliopa from '../img/kaliopa.png';
import crown from '../img/kruna.png';

function WhyUs() {
  const [benefit, setBenefit] = useState('Zdrave i kvalitetne biljke');

  function changeBenefit(benefit){
    setBenefit(benefit);
  }

  return (
    <section className="why-us"> 
        <div className="wrapper">
            <h2 className="title transformed-up"><span className="black">Zašto Naš</span> <br /> <span className="cursive"> Rasadnik?</span></h2>
            <p>ZATO što se sve faze života naših biljaka od proizvodnje rasada preko uzgoja i oblikovanja do konačne isporuke našim kupcima odvijaju na <span className="yellow">našem porodičnom imanju</span>. To nam garantuje <span className="yellow">apsolutnu kontrolu nad svim faktorima</span>  koji su presudni za uzgoj biljaka vrhunskog kvaliteta koje želite u svom domu, dvorištu ili poslovnom prostoru.</p>
            <div className="best-kaliopa">
                <p>ZATO što imamo <span className="yellow">najbolje kaliope</span> u Srbiji, po rečima naših kupaca</p>
                <img src={kaliopa} alt="kaliopa" />
            </div>
            <div className='crown-div'>
                <p>ZATO što možemo ispuniti zahteve i najzahtevnijih kupaca. Ponosni smo na to da smo godima ukrašavali najlepši dvor u Srbiji, kraljevski <span className='yellow'>Beli dvor</span>. </p>
                <img src={crown} className='crown-img' alt="kruna" />
            </div>
            <p>I ZATO što imamo...</p>
            <div className="why-div yellow text-center">{benefit}</div>
            <div className="why-icons d-flex transformed-down">
                <div className={`why-progressBar ${benefit === 'Zdrave i kvalitetne biljke' ? 'first' : benefit === 'Podršku i stručne savete' ? 'second' : benefit === 'Pristupačne cene' ? 'third' : benefit === 'Brzu i efikasnu isporuku' ? 'fourth' : ''}`}></div>
                <div className={`icon-flex d-flex ${benefit === 'Zdrave i kvalitetne biljke' ? 'checked' : ''}`} onClick={() => changeBenefit('Zdrave i kvalitetne biljke')}>
                    <FaFlask />
                </div>
                <div className={`icon-flex d-flex ${benefit === 'Podršku i stručne savete' ? 'checked' : ''}`} onClick={() => changeBenefit('Podršku i stručne savete')}>
                    <FaComments />
                </div>
                <div className={`icon-flex d-flex ${benefit === 'Pristupačne cene' ? 'checked' : ''}`} onClick={() => changeBenefit('Pristupačne cene')}>
                    <FaMoneyBillWave />
                </div>
                <div className={`icon-flex d-flex ${benefit === 'Brzu i efikasnu isporuku' ? 'checked' : ''}`} onClick={() => changeBenefit('Brzu i efikasnu isporuku')}>
                    <FaShippingFast />
                </div>
            </div>
        </div>
      </section>
  )
}

export default WhyUs;