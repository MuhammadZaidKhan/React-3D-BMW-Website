import React from 'react';
import Navbar from './Navbar';
import CarModel from './CarModel'
import Section from './Section'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="">
                <h1 className='font-semibold font-Poppins text-custom-purpel text-start md:text-center text-7xl md:text-8xl pl-5 mt-8'>BMW</h1>
                <h1 className='font-semibold font-Poppins text-black text-7xl  md:text-8xl text-right md:text-right pr-5 mb-2 md:mr-[200px]'>DESIGN</h1>
            </div>
            <CarModel />
            <Section />
        </>
    );
};

export default Home;
