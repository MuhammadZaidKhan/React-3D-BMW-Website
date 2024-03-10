import React from 'react';
import Navbar from './Navbar';
import CarModel from './CarModel'
import Section from './Section'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="">
                <h1 className='font-semibold font-Poppins text-custom-purpel text-center text-8xl mt-8'>BMW</h1>
                <h1 className='font-semibold font-Poppins text-black text-8xl text-right mb-2 mr-[200px]'>DESIGN</h1>
            </div>
            <CarModel />
            <Section />
        </div>
    );
};

export default Home;
