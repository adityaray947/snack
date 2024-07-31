import React from 'react';
import Cards from './Cards';
import Dominos from '../Data/Dominos.json';
import McDonalds from '../Data/McDonalds.json';
import Swiggy from '../Data/Swiggy.json';
import Zomato from '../Data/Zomato.json';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Food = () => {
    // Combine all data into one array
    const combinedData = [
        ...Dominos,
        ...McDonalds,
        ...Swiggy,
        ...Zomato
    ];

    // Sort the combined data by price in descending order
    const sortedData = combinedData.sort((a, b) => b.price - a.price);

    return (
        <div>
            <Navbar/>

            <div className='max-w-screen-2xl bg-base-100 container mx-auto md:px-20'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-black text-2xl font-semibold md:text-4xl'>
                        We are Delighted To have you <span className='text-pink-500'>
                            here! :)
                        </span>
                    </h1>
                    <p className='mt-12'>
                        Welcome to our comprehensive library of books, where knowledge and adventure await! Dive into a diverse selection of titles across various genres, from gripping novels and insightful non-fiction to educational textbooks and inspiring biographies. Whether you're seeking to expand your horizons, find your next favorite read, or simply indulge in the joy of reading, our collection has something for everyone.
                    </p>
                    <Link to="/" className='mt-5 ml-3 text-pink-500'>
                        Back
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                    {
                        sortedData.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Food;
