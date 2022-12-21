import React, { useEffect, useState } from 'react';
import Card from '../Card';
const Service = () => {
    const [service, setService] = useState([]);


    useEffect(() => {
        fetch('https://tech-tutor-server-side.vercel.app/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>

            <div className='text-center mb-24 bg-gray-800'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl text-white font-bold md:py-6'>
                    My Services
                </h1>
                <p className='md:text-2xl text-xl font-bold text-gray-400'>Here are Some course that i teach people to increase their knowledge. and become self-defendent</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    service.slice(0, 3).map(service => <Card key={service._id}
                        service={service}
                    ></Card>)

                }
            </div>
        </div>
    );
};

export default Service;