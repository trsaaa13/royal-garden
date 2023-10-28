import React, { useState, useEffect } from 'react'

function Hero({length, page}) {
  const [ index, setIndex ] = useState(1);

  function nextImg(){
    setIndex( prevState => prevState === length ? 1 : prevState + 1 )
  }

  useEffect(() =>{
    const interval = setInterval( nextImg, 5000 );

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [])
  
  return (
    <main className='hero-container'>
        <div className={`main hero ${page}-hero1 show${index}`}></div>
        <div className={`main hero ${page}-hero2 show${index}`}></div>
        <div className={`main hero ${page}-hero3 show${index}`}></div>
        <div className={`main hero ${page}-hero4 show${index}`}></div>
    </main>
  )
}

export default Hero;