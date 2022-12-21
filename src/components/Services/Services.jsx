import React, { useEffect, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import useTitle from '../../useTitle';
import Card from '../Card';

const Services = () => {
    useTitle('Services');
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://tech-tutor-server-side.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='bg-gray-800 py-8'>
            <div className='text-center mb-24 text-white '>

                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    My Services
                </h1>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Here are Some course that i teach people to increase their knowledge. and become self-defendent.</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    services.length === 0 ?
                        <div ><SpinnerCircular /></div> : <SpinnerCircular enabled={false} />
                }
                {
                    services.map(service => <Card key={service._id}
                        service={service}
                    ></Card>
                    )
                }

            </div>

        </div>
    );
};




export default Services;