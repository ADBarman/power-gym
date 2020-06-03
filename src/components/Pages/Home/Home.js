import React from 'react';
import Banner from '../../Banner/Banner';
import Workout from '../../Workout/Workout';
import About from '../../AboutUs/About';
import Training from '../../Training/Training';
import Footer from '../../Footer/Footer';
import ChooseUs from '../../ChooseUs/ChooseUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Workout></Workout>
            <About></About>
            <Training></Training>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;