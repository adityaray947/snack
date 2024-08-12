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

            <div className=' max-w-screen-2xl bg-base-100 container mx-auto md:px-20'>
                <div className='mt-36 items-center justify-center text-center'>
                    <h1 className='text-black text-2xl font-semibold md:text-4xl'>
                        We are Delighted To have you <span className='text-yellow-500'>
                            here! :)
                        </span>
                    </h1>
                    <p className='mt-7'>
                    Welcome to SnackSaver, your ultimate destination for discovering the best in food and dining! Explore a curated collection of top-rated restaurants, delicious recipes, and exclusive offers. From savory snacks and hearty main courses to delightful desserts, we bring you a diverse selection that caters to all tastes. 
                    </p>
                    <div className='mt-5'>
                    <Link to="/home" className='mt-10 ml-3 text-yellow-500'>
                        Back
                    </Link>
                    </div>
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
