import React from 'react';
import Banner from '../Homepage/Banner/Banner';
import About from './About/About';
import AwardSection from './AwardSection/AwardSection';
import Services from './Services/Services';
import Review from "./Review/Review";
import Featured from '../Homepage/Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <AwardSection />
            <Featured/>
            <Services />
            <Review/>
        </div>
    );
};

export default Home;