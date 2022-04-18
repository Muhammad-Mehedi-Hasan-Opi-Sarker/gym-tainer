import React from 'react';
import Banner from '../Banner/Banner';
import Headers from '../Headers/Headers';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;