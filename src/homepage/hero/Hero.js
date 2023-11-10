import React from "react";
import { useState, useEffect } from "react";
import './hero.css';

const Hero = () => {

    const [hidden, setHidden] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = ["HELLO,"];

    const first = document.getElementById('first') 
    const second = document.getElementById('second')
    const third = document.getElementById('third')
    const fourth = document.getElementById('fourth')
    const fifth = document.getElementById('fifth')

    const animate = (element, position) => {
      // element.style.transform = `translateX(${position}px)`
      if (element) {
        element.style.transform = `translateX(${position}px)`;
      }
    }

      let lastKnownScrollPosition = 1;
    
      document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;
    
        window.requestAnimationFrame(function() {
          animate(first, lastKnownScrollPosition * 0.2);
          animate(second, lastKnownScrollPosition * -0.2);
          animate(third, lastKnownScrollPosition * 0.2);
          animate(fourth, lastKnownScrollPosition * -0.2);
          animate(fifth, lastKnownScrollPosition * 0.2);
        });
      });
    
    
    


    
    useEffect(() => {
      const switchText = () => {
      setHidden(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1));
      };

      const switchInterval = setInterval(switchText, 6000); 

      return () => clearInterval(switchInterval);
      }, []);

    return (
        <>

            {
              hidden ? 
              <div className='container'>

                

                <div className='header'>
                  <p id="first" className='head-desc' data-aos="fade-left">HAWINF</p>
                  <p id="second" className='head-desc1' data-aos="fade-right">process of</p>
                  <p id="third" className='head-desc2' data-aos="fade-left">acquiring </p>
                  <p id="fourth" className='head-desc3' data-aos="fade-right">Frontend</p>
                  <p id="fifth" className='head-desc4' data-aos="fade-left">Development</p>
                </div>
              </div>
            :
              
              <>
                <div className="wrapper">
                  <svg className='svg'>
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        {texts[currentIndex]}
                    </text>
                  </svg>
                </div>
              </>
            }
            
        </>
    );
};

export default Hero;