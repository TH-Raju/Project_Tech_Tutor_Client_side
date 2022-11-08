import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ServiceDetail = () => {
    const { img, price, title, body } = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <div className='bg-gray-800 p-6'>

            <section>
                <div className="container max-w-6xl space-y-6 sm:space-y-12">
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

            {/* Review Section */}
            <div>
                <h3 className="text-2xl text-white font-semibold sm:text-4xl e group-focus:underline pb-6 underline">Reviews</h3>
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Give a Review</label>
                    <input type="text" id="text" name='feedback' className="bg-gray-50 border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Feedback" required />
                    <div className='text-end'>
                        <button className='bg-cyan-700 w-[200px] text-center rounded-md font-medium my-6 mx-auto py-3 text-white'>Post</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;