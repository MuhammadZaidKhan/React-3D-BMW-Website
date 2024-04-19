import React from 'react'
import Car from '../Assets/image 2.png';
import Car1 from '../Assets/image 5 (1).png';
import Car2 from '../Assets/Rectangle 33.png';
import Car3 from '../Assets/Rectangle 34.png';
import Car4 from '../Assets/Rectangle 35.png';
import Car5 from '../Assets/Rectangle 36.png';
import Car6 from '../Assets/Rectangle 38.png';
import Car7 from '../Assets/Rectangle 39.png';
import Car8 from '../Assets/Rectangle 40.png';
import Car9 from '../Assets/Rectangle 41.png';
const Section = () => {
    return (
        <div>
            <h2 className='text-custom-purpel mt-12 font-bold font-Inter text-center text-5xl'>About Us</h2>
            <div className='content-container'>
                <p className='font-Roboto mt-8 mx-8 md:mx-[250px] text-center'>Changing Lanes is the official podcast from BMW. In these audio series, we take you with us on new journeys through the BMW universe. Find out more about sustainability, innovation, technology, mobility and the latest trends. You can find and subscribe to Changing Lanes on all major podcast platforms, so tune in!</p>
            </div>
            <h2 className='text-custom-purpel font-bold font-Inter text-center text-5xl mt-20'>Our Videos</h2>

            <div className='mt-10'>
                <img src={Car} alt="Carimage" />
            </div>

            <div className='flex flex-col md:flex-row'>
                <div className='md:mt-36 mt-24'>
                    <h1 className='font-semibold font-Poppins text-custom-purpel text-start text-7xl md:text-8xl ml-8'>OUR</h1>
                    <h1 className='font-semibold font-Poppins text-black text-7xl md:text-8xl ml-24'>CARS</h1>
                    <div className='arrows space-x-3'>
                        <span class="arrow left">&#8592;</span>
                        <span class="arrow right">&#8594;</span>
                    </div>
                </div>
                <img className='lg:ml-52 md:ml-16 md:mt-20 md:h-96 h-60' src={Car1} alt="Carimage" />
            </div>
            <h2 className='text-custom-purpel font-bold font-Inter text-center text-5xl mt-28'>BMW Collections</h2>

            <div className='mt-10'>
                <div className='flex flex-col md:flex-row items-center justify-between mt-20'>
                    <img className='car2' src={Car2} alt="Carimage" />
                    <img className='car2' src={Car3} alt="Carimage" />
                    <img className='car2' src={Car4} alt="Carimage" />
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between md:mt-20 mt-8'>
                    <img className='car2' src={Car5} alt="Carimage" />
                    <img className='car2' src={Car6} alt="Carimage" />
                </div>
                <div className='md:flex hidden justify-between mt-20'>
                    <img className='car2' src={Car7} alt="Carimage" />
                    <img className='car2' src={Car8} alt="Carimage" />
                    <img className='car2' src={Car9} alt="Carimage" />
                </div>
            </div>

            <h2 className='text-custom-purpel font-bold text-center font-Inter text-5xl mt-28'>BMW Forever</h2>
            <div className=''>
                <p className='font-Roboto mt-10 text-center px-2 md:px-44'>
                    Life has many unforgettable moments in store for us. Some, we think back on fondly; others, less so. But every one of them is unique. That is why a BMW is more than just a method of transportation. It is a companion that creates space for emotion and allows us to feel the joy which lives within every single moment. Dive into the emotional farewell drive in this video, and discover exclusive behind-the-scenes recordings from the film production.
                </p>
            </div>

            <div className='md:mt-20 mt-10'>
                <footer className="bg-black h-16 px-4 text-center md:pt-5 pt-2 text-white">
                    2023 Mike Delsing | All visuals belong to their respective owners.
                </footer>
            </div>
        </div>
    )
}

export default Section