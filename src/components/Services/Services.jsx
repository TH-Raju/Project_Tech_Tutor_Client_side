import React, { useEffect, useState } from 'react';
import Card from '../Card';

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    services.map(service => <Card key={service.s_id}
                        service={service}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Services;