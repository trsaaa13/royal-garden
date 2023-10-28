import React, {useState, useEffect} from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
      text : 'Prelepo cveće, odlični četinari, vrhunska usluga...',
      person : 'Zoran, Leskovac'
  },
  {
      text : 'PORODICA ZA PRIMER… A CVEĆE IM JE FANTASTIČNO.',
      person : 'Slave, Turekovac'
  },
  {
      text: 'Biljke iz rasadnika mi se uvek dobro prime. Uvek nađem ono što mi treba. Sve pohvale!',
      person: 'Marija, Vlasotince'
  },
  {
      text: 'Cene su pristupačne, a kvalitet cveća na visokom nivou. Prezadovoljna sam!',
      person: 'Jelena, Leskovac'
  },
  {
      text: 'Impresioniran sam izborom četinara. Drveće je zdravo i izgleda odlično.',
      person: 'Miloš, Beograd'
  }
];

let activeIndex = 0;

function Testimonials() {
  const [testimoial, setTestimonial] = useState(testimonials[activeIndex]);  

  useEffect(() =>{
      function changeTestimonial(){
        activeIndex++;
        if ( activeIndex > testimonials.length - 1){
            activeIndex = 0;
        }
        setTestimonial(testimonials[activeIndex]);
    }
    const testimoialInterval = setInterval( changeTestimonial, 8000 );
    return () => clearInterval(testimoialInterval);
  }, [])  

  return (
    <section className="testimonials">
      <div className="wrapper">
        <h2 className="title transformed-up">
          <span className="yellow">Reč</span> <br />
          <span className="cursive">Naših Kupaca</span>
        </h2>
        <div className="line"></div>
        <div className="testimoials-text">
          <FaQuoteLeft className="quote-left"/>
          <FaQuoteRight className="quote-right"/>
          <p className="testimonials-p">{testimoial.text}</p>
          <p className="testimonials-name">{testimoial.person}</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
