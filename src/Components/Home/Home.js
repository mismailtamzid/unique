import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Homepage/Banner/Banner';
import About from './About/About';
import AwardSection from './AwardSection/AwardSection';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <AwardSection />
            <Services/>
        </div>
    );
};

export default Home;