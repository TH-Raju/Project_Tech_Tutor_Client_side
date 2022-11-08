import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Summary></Summary>
        </div>
    );
};

export default Home;