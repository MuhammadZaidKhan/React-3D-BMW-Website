import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-black h-16 px-4 flex justify-between items-center">
            {/* Add your content here, e.g., brand logo, navigation links */}
            <div>
                <button className='bg-custom-purpel text-white h-10 w-28 text-center md:ml-10'>BMW</button>
            </div>
            <div className='mr-60'>
                <ul className='text-white hidden md:flex space-x-6 justify-between'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Designs</li>
                    <li className='pricing-border font-poppins text-purpel'>Pricing</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
