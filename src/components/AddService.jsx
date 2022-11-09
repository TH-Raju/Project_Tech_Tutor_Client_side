import React, { useState } from 'react';
import useTitle from '../useTitle';

const AddService = () => {
    const [review, setReview] = useState({});
    useTitle('Add Service');


    const handleAddReview = event => {
        event.preventDefault();
        console.log(review);


        // CRUD - Create setup
        fetch('https://tech-tutor-server-side.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Task Added");
                    event.target.reset();
                }
                console.log(data)
            })
    }


    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...review }
        newService[field] = value;
        setReview(newService);
    }
    return (
        <div>
            <form onSubmit={handleAddReview}>
                <div className="mb-6 w-2/3 mx-auto mt-4">
                    <label htmlFor="text" className="block mb-2  text-gray-900 text-xl font-bold dark:text-gray-900">Name</label>
                    <input onBlur={handleInputBlur} type="text" id="text" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Course Name" required />

                </div>
                <div className="mb-6 w-2/3 mx-auto">
                    <label htmlFor="text" className="block mb-2  text-gray-900 text-xl font-bold dark:text-gray-900">Title</label>
                    <input onBlur={handleInputBlur} type="text" id="text" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Course title" required />
                </div>
                <div className="mb-6 w-2/3 mx-auto">
                    <label htmlFor="text" className="block mb-2  text-gray-900 text-xl font-bold dark:text-gray-900">Image URL</label>
                    <input onBlur={handleInputBlur} type="text" id="text" name='img' className="bg-gray-50 border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Give an Image URL" required />
                </div>
                <div className="mb-6 w-2/3 mx-auto">
                    <label htmlFor="text" className="block mb-2  text-gray-900 text-xl font-bold dark:text-gray-900">Description</label>
                    <input onBlur={handleInputBlur} type="text" id="text" name='body' className="bg-gray-50 border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Give a Description" required />
                </div>
                <div className="mb-6 w-2/3 mx-auto">
                    <label htmlFor="text" className="block mb-2  text-gray-900 text-xl font-bold dark:text-gray-900">Price</label>
                    <input onBlur={handleInputBlur} type="text" id="text" name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Set a Price" required />
                </div>
                <div className='text-center'>

                    <button type="submit" className='bg-cyan-700 w-[200px] text-center rounded-md font-medium my-6 mx-auto py-3 text-white'>Add</button>

                </div>
            </form>
        </div>
    );
};

export default AddService;