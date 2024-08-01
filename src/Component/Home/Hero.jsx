import React, { useRef } from 'react';
import backgroundVideo from '../Video/Hero.mp4';
import '../../Style/Hero.css';
import Dominos from '../../Data/Dominos.json';
import McDonalds from '../../Data/McDonalds.json';
import Swiggy from '../../Data/Swiggy.json';
import Zomato from '../../Data/Zomato.json';
import Cards from '../Cards';

export const Hero = () => {
  // Create a ref for the Recommendations section
  const recommendationsRef = useRef(null);

  // Function to scroll to Recommendations section
  const scrollToRecommendations = () => {
    if (recommendationsRef.current) {
      recommendationsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const combinedData = [
    ...Dominos.slice(0, 1),
    ...McDonalds.slice(0, 2),
    ...Swiggy.slice(0, 1),
    ...Zomato.slice(0, 2)
  ];

  return (
    <>
      <div className='relative md:h-screen h-[600px] md:w-full mb-10'>
        <video 
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={backgroundVideo}
          autoPlay 
          muted 
          loop 
          style={{ filter: 'brightness(0.6) contrast(1.4)' }}
        />
        <div className='relative h-full flex flex-col items-center justify-center text-center'>
          <h1 className='text-white text-4xl md:text-6xl font-bold text-glow fade-in mb-6'>
            Save Big on Every Order
          </h1>
          <button 
            className='mt-10 Btn py-2 px-4 rounded shadow-lg text-white fade-in'
            onClick={scrollToRecommendations}
          >
            Get Started
          </button>
        </div>
      </div>
      <div ref={recommendationsRef} className='mt-12'>
      <h1 className='recom text-black text-4xl md:text-6xl font-extrabold text-center mt-12 mb-8 p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text shadow-lg'>
  Recommendations
</h1>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
          {
            combinedData.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Hero;
