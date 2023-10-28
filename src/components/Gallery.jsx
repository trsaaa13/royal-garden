import React, {useState, useEffect} from 'react';
// import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';

function Gallery({images, width}) {
  const [ slide, setSlide ] = useState(0);
  const [ autoSlide, setAutoSlide ] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [ screen, setScreen ] = useState(window.innerWidth);
  
  // functions to trigger previous and next slide
  function prevSlide(){
    setSlide((prevState) => ( prevState === 0 ? images.length - 1 : prevState - 1 ))
  }

  function nextSlide(){
    setSlide((prevState) => ( prevState === images.length - 1 ? 0 : prevState + 1  ))
  }

  // functions for handling swipping on mobile screens
  function handleTouchStart(event) {
    setTouchStartX(event.touches[0].clientX);
    setAutoSlide(false);
  }

  function handleTouchEnd(event) {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDistance = touchEndX - touchStartX;
    const minSwipeDistance = width / 5;  //adjust this number to set how long swipe is

    if (touchDistance > minSwipeDistance) {
      prevSlide();
    } else if (touchDistance < -minSwipeDistance) {
      nextSlide();
    }

    setAutoSlide(true);
  }

  // keybord sliders function
  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  }

  // auto sliding effect
  useEffect(() =>{
    if(!autoSlide) return;

    const slideInterval = setInterval( nextSlide, 5000 );
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line 
  }, [autoSlide]);

  // keybord listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);


  // tracking window resizing to handle changes of orientation
  useEffect(() =>{
    const updateWidth = () =>{
      setScreen(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);

    return(() => {
      window.removeEventListener('resize', updateWidth);
    })
  }, [screen]);

  return (
    <div className="gallery-showroom">
        <div className="gallery-imgs d-flex" onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
            {images.map((img, i) => (
                <img key={i} src={img} alt={img} className='gallery-img' style={{transform: `translateX(-${slide * (screen < width ? screen : width)}px)`}} onMouseEnter={() => setAutoSlide(false)} onMouseLeave={() => setAutoSlide(true)}/>
            ))}
            {/* { video && <video src={video} className={`gallery-img video-slide ${images.length === 0 ? 'active-slide' : ''}`} style={{ transform: `translateX(-${slide * width}px)` }} autoPlay loop muted></video> } */}
        </div>
        <div className="dots d-flex">
          {images.length > 1 ? images.map((_, i) =>(
            <div key={i} className={`dot ${ i ===  slide ? 'active-slide' : '' }`} onClick={() => setSlide(i)}>
            </div>
          )) : false}
        </div>
        {/* <div className="gallery-btns d-flex">
            <div onClick={prevSlide}><FaArrowLeft /></div>
            <div onClick={nextSlide}><FaArrowRight /></div>
        </div> */}
    </div>
  )
}

export default Gallery;