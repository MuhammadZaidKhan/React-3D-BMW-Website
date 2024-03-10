import React from 'react'
import Car from '../Assets/image 2.png';
import Car1 from '../Assets/image 5 (1).png';
const Section = () => {
    return (
        <div>
            <h2 className='text-custom-purpel font-bold text-center text-5xl'>About Us</h2>
            <div className='content-container'>
                <p className='font-Roboto mt-3 text-justify text-center'>Changing Lanes is the official podcast from BMW. In these audio series,<br /> we take you with us on new journeys through the BMW universe. Find<br /> out more about sustainability, innovation, technology, mobility and the<br /> latest trends. You can find and subscribe to Changing Lanes on all<br /> major podcast platforms, so tune in!</p>
            </div>
            <h2 className='text-custom-purpel font-bold text-center text-5xl'>Our Videos</h2>

            <div className='mt-10'>
                <img src={Car} alt="Carimage" />
            </div>

            <div className='flex'>
                <div className='mt-36'>
                    <h1 className='font-semibold font-Poppins text-custom-purpel text-start text-8xl ml-8'>Our</h1>
                    <h1 className='font-semibold font-Poppins text-black text-8xl ml-24'>CARS</h1>
                    <div className='arrows space-x-3'>
                        <span class="arrow left">&#8592;</span>
                        <span class="arrow right">&#8594;</span>
                    </div>
                </div>
                <img className='car1' src={Car1} alt="Carimage" />
            </div>
            <h2 className='text-custom-purpel font-bold text-center text-5xl mt-28'>Bmw Collections</h2>

            <div className='flex justify-between'>
                <img className='car2' src={Car1} alt="Carimage" />
                <img className='car2' src={Car1} alt="Carimage" />
                <img className='car2' src={Car1} alt="Carimage" />
            </div>
            <div className='flex justify-between'>
                <img className='car2' src={Car1} alt="Carimage" />
                {/* <img className='car2' src={Car1} alt="Carimage" /> */}
                <img className='car2' src={Car1} alt="Carimage" />
            </div>
            <div className='flex justify-between'>
                <img className='car2' src={Car1} alt="Carimage" />
                <img className='car2' src={Car1} alt="Carimage" />
                <img className='car2' src={Car1} alt="Carimage" />
            </div>
        </div>
    )
}

export default Section