import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../useTitle';
import Service from '../Services/Service';
import Banner from './Banner';
import OwnSection from './OwnSection';
import Summary from './Summary';

const Home = () => {
    useTitle('Home');
    return (
        <div className='bg-gray-800'>
            <Banner></Banner>
            <Service></Service>
            <div className='text-center'>
                <Link to='/services' > <button className='bg-cyan-700 mt-20 w-[200px] text-center rounded-md font-medium mb-24 mx-auto py-3 text-white'>See All</button></Link>
            </div>
            <OwnSection></OwnSection>
            <Summary></Summary>
        </div>
    );
};

export default Home;