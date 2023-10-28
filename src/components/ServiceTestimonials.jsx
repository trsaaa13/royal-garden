import React, {useState, useEffect} from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
    {
        text : 'Sve pohvale za tim Milenković. Moje dvorište sada izgleda odlično. Komšije su već počele da dolaze i zavide na mom novom savšenom kutku.',
        person : 'Slavica, Leskovac'
    },
    {
        text : 'Moj novi travnjak je savršen. Sve je automatizovano i mogu da uključujem zalivanje dok sam na poslu, sa svog telefona. Sve preporuke!',
        person : 'Milan, Lebane'
    },
    {
        text : 'Svaka čast Nenadu i ekipi! Dobio sam novu stazu, živa ograda je savršena, četinari izgledaju odlično. Ispalo je bolje nego što sam planirao.',
        person : 'Ivica, Leskovac'
    },
    {
        text : 'Imao sam ideju kako bi to trebalo da izgleda, ali je njihov predlog bio bolji. Više je odgovarao tipu i vlažnosti zemljišta u mom dvorištu. Rezultat je savršen!',
        person : 'Nebojša, Vlasotince'
    }
];

let activeIndex = 0;

function ServiceTestimonials() {
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

export default ServiceTestimonials;
