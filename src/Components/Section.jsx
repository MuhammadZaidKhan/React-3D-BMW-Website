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
            <h2 className='text-custom-purpel font-bold font-Inter text-center text-5xl'>About Us</h2>
            <div className='content-container'>
                <p className='font-Roboto mt-8 text-justify text-center'>Changing Lanes is the official podcast from BMW. In these audio series,<br /> we take you with us on new journeys through the BMW universe. Find<br /> out more about sustainability, innovation, technology, mobility and the<br /> latest trends. You can find and subscribe to Changing Lanes on all<br /> major podcast platforms, so tune in!</p>
            </div>
            <h2 className='text-custom-purpel font-bold font-Inter text-center text-5xl mt-20'>Our Videos</h2>

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
            <h2 className='text-custom-purpel font-bold font-Inter text-center text-5xl mt-28'>Bmw Collections</h2>

            <div className='mt-10'>
                <div className='flex justify-between'>
                    <img className='car2' src={Car2} alt="Carimage" />
                    <img className='car2' src={Car3} alt="Carimage" />
                    <img className='car2' src={Car4} alt="Carimage" />
                </div>
                <div className='flex justify-between mt-20'>
                    <img className='car2' src={Car5} alt="Carimage" />
                    <img className='car2' src={Car6} alt="Carimage" />
                </div>
                <div className='flex justify-between mt-20'>
                    <img className='car2' src={Car7} alt="Carimage" />
                    <img className='car2' src={Car8} alt="Carimage" />
                    <img className='car2' src={Car9} alt="Carimage" />
                </div>
            </div>

            <h2 className='text-custom-purpel font-bold text-center font-Inter text-5xl mt-28'>Bmw Forever</h2>
            <div className='content-container'>
                <p className='font-Roboto mt-10 text-justify text-center'>
                    Life has many unforgettable moments in store for us. Some, we think back on<br />fondly; others, less so. But every one of them is unique. That is why a BMW is<br /> more than just a method of transportation. It is a companion that creates space<br /> for emotion and allows us to feel the joy which lives within every single moment.<br /> Dive into the emotional farewell drive in this video, and discover exclusive behind-<br />the-scenes recordings from the film production.
                </p>
            </div>

            <div className='mt-48'>
                <footer className="bg-black h-16 px-4 text-center pt-5 text-white">
                    2023 Mike Delsing | All visuals belong to their respective owners.
                </footer>
            </div>
        </div>
    )
}

export default Section