import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Card = ({ service }) => {
    const { img, price, title, body, _id } = service;
    return (
        <PhotoProvider>
            <div className='md:w-96 mx-auto'>
                <div className="p-4 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <PhotoView src={img}>
                        <img src={img} alt="service" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    </PhotoView>
                    <div className="flex flex-col justify-between py-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                            <p className="dark:text-gray-200">{body.length > 150 ? body.slice(' ', 100) : body}...<Link to={`/servicedetail/${_id}`} className="underline">Read More</Link></p>
                        </div>
                        <p
                            className="text-2xl font-semibold rounded-lg py-3 my-4">Price: $
                            {price}
                        </p>
                    </div>
                    <Link to={`/servicedetail/${_id}`}><button type="button" className="flex items-center hover:bg-sky-200 relative justify-center w-full p-3 font-semibold tracking-wide bg-blue-700 text-white rounded-md dark:bg-violet-400 dark:text-gray-900">Detail</button></Link>
                </div>

            </div>
        </PhotoProvider>
    );
};

export default Card;


