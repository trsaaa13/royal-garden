import React, { useState, useEffect, useRef } from 'react';

function NumCounter({ target, duration }) {
  const [number, setNumber] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const interval = 50; // Update interval in milliseconds

    let start = 0;
    const increment = Math.ceil((target - start) / (duration / interval));

    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2;

        if (isVisible && !isAnimated) {
          setIsAnimated(true);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setNumber(target);
              clearInterval(timer);
            } else {
              setNumber(start);
            }
          }, interval);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimated, target, duration]);

  return (
    <div ref={elementRef} className="big-num">
      <span className="h-0">{number.toLocaleString().replaceAll(',','.')}</span>
    </div>
  );
}

export default NumCounter;
