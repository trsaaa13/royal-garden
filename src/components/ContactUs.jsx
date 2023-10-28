import React from 'react';
import {FaPhoneAlt, FaMobileAlt, FaSms, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

function ContactUs() {
  return (
    <section className="contact">
        <div className="wrapper">
            <h2 className="title transformed-up">Kontaktirajte <br /> <span className="black">Nas</span></h2>
            <div className="contact-info black d-flex">
                <div className='text-center'>
                    <div className='d-flex'>
                        <FaPhoneAlt /> <a href="tel:+38116796362">016796362</a> 
                    </div>
                    <div className='d-flex'>
                        <FaMobileAlt /> <a href="tel:+38169796362">069796362</a>    
                    </div>
                    <div className='d-flex'>
                        <FaSms /> <a href="sms:+38169796362&body=...">069796362</a>
                    </div>
                </div>
                <div className='text-center'>
                    <div className="d-flex">
                        <FaEnvelope /> <a href="mailto:n.milenkovic1968@gmail.com">n.milenkovic1968@gmail.com</a>      
                    </div>
                    <div className="d-flex">
                        <FaFacebook /> <a href="https://www.facebook.com/FLOWERS.MILENKOVIC/" target="_blank" rel="noopener noreferrer"> Facebook </a> 
                    </div>
                    <div className="d-flex">
                        <FaInstagram /> <a href="https://instagram.com/royal_garden_milenkovic?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"> Instagram </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs;