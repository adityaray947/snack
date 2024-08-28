import React, { useRef } from 'react';
import backgroundVideo from '../Video/Hero.mp4';
import '../../Style/Hero.css';
import Dominos from '../../Data/Dominos.json';
import McDonalds from '../../Data/McDonalds.json';
import Swiggy from '../../Data/Swiggy.json';
import Zomato from '../../Data/Zomato.json';
import Cards from '../Cards';

export const Hero = () => {
  const recommendationsRef = useRef(null);
  const bestSellersRef = useRef(null);
  const categoryWiseRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const combinedData = [
    ...Dominos.slice(0, 1),
    ...McDonalds.slice(0, 2),
    ...Swiggy.slice(0, 1),
    ...Zomato.slice(0, 1)
  ];

  const bestSellers = [
    ...Dominos.filter(item => item.ratings >= 4.5),
    ...McDonalds.filter(item => item.ratings >= 4.5),
    ...Swiggy.filter(item => item.ratings >= 4.5),
    ...Zomato.filter(item => item.ratings >= 4.5)
  ];

  const categories = ["Pizza", "Snacks", "Burgers", "Main Course"];
  const categoryWiseData = categories.reduce((acc, category) => {
    acc[category] = [
      ...Dominos.filter(item => item.Category === category),
      ...McDonalds.filter(item => item.category === category),
      ...Swiggy.filter(item => item.category === category),
      ...Zomato.filter(item => item.category === category),
    ];
    return acc;
  }, {});

  return (
    <>
      <div className='relative md:h-screen h-[600px] md:w-full mb-10 overflow-hidden'>
        <video 
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={backgroundVideo}
          autoPlay 
          muted 
          loop 
          style={{ filter: 'brightness(0.5) contrast(1.2)' }}
        />
        <div className='relative h-full flex flex-col items-center justify-center text-center p-4'>
          <h1 className='text-white text-4xl md:text-6xl font-extrabold text-glow fade-in mb-6 tracking-wide'>
            Discover Flavors Like Never Before
          </h1>
          <p className='text-white text-lg md:text-2xl mb-6 px-4'>
            Explore our exclusive offers and find your next favorite meal today!
          </p>
          <button 
            className='mt-10 Btn py-3 px-6 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg hover:shadow-xl text-white text-lg font-semibold fade-in transform hover:scale-105 transition-transform duration-300'
            onClick={() => scrollToSection(recommendationsRef)}
          >
            
          </button>
        </div>
      </div>
      <div ref={recommendationsRef} className='mt-12'>
        <h1 className='recom text-black text-4xl md:text-6xl font-extrabold text-center mt-12 mb-8 p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text shadow-lg'>
          Recommendations
        </h1>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12'>
          {combinedData.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div ref={bestSellersRef} className='mt-12'>
        <h1 className='best-sellers text-black text-4xl md:text-6xl font-extrabold text-center mt-12 mb-8 p-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text shadow-lg'>
          Best Sellers
        </h1>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12'>
          {bestSellers.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div ref={categoryWiseRef} className='mt-12'>
        <h1 className='category-wise text-black text-4xl md:text-6xl font-extrabold text-center mt-12 mb-8 p-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text shadow-lg'>
          Category Wise
        </h1>
        {Object.entries(categoryWiseData).map(([category, items]) => (
          <div key={category} className='mt-12'>
            <h2 className='category-title text-black text-3xl font-bold text-center mb-6'>
              {category}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12'>
              {items.map((item) => (
                <Cards key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
