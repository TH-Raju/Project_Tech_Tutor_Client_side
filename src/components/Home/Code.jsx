import React from 'react';

const Code = () => {
    return (
        <div className='flex flex-wrap gap-10 justify-evenly items-center my-32'>
            <h2 className='items-center text-center text-7xl font-extrabold text-white'>Let's Code Your <br /> Career!</h2>
            <div>
                <img src={require('../../img/class.jpg')} className="h-96 max-w-full rounded-tl-3xl rounded-br-3xl" alt="" />
            </div>
        </div>
    );
};

export default Code;