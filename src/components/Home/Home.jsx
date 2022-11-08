import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import Banner from './Banner';
import Summary from './Summary';

const Home = () => {
    return (
        <div className='bg-gray-800'>
            <Banner></Banner>
            <Services></Services>
            <div className='text-center'>
                <Link to='/services'> <button className='bg-cyan-700 w-[200px] text-center rounded-md font-medium my-6 mx-auto py-3 text-white'>See All</button></Link>
            </div>
            <Summary></Summary>
        </div>
    );
};

export default Home;