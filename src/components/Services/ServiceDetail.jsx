import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const { img, price, title, body } = useLoaderData();
    return (
        <div className='bg-gray-800'>

            <section>
                <div className="container max-w-6xl p-6 space-y-6 sm:space-y-12">
                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-800">
                        <img src={img} alt="Website Design System" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl text-white font-semibold sm:text-4xl e group-focus:underline">{title}</h3>
                            <h2 className='text-white text-2xl py-4'>Price: $ {price}</h2>
                            <h2 className='text-white text-2xl font-bold'>Description :</h2>
                            <p className='text-white text-lg'>{body}</p>
                        </div>
                    </div>
                    <div className='text-end'>
                        <Link to='/services'> <button className='bg-cyan-700 w-[200px] text-center rounded-md font-medium my-6 mx-auto py-3 text-white'> {'<< '}Back</button></Link>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ServiceDetail;