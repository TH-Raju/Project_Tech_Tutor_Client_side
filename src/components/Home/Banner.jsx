import React from 'react';

const Banner = () => {
    return (
        <div className='text-white bg-black'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>
                    GROWING WITH LEARNING
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Learn by Doing.
                </h1>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Learn the Best Technology with Us. Increase revenue for Desktop Laptop Mobile app platforms.</p>
                <button className='bg-cyan-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
            </div>
        </div>
    );
};

export default Banner;