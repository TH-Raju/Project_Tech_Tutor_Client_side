import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewUpdate = () => {
    const review = useLoaderData();
    const [view, setView] = useState(review);

    const updateReview = event => {
        event.preventDefault();
        // console.log(user);


        // CRUD - Update setup
        fetch(`https://tech-tutor-server-side.vercel.app/review/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(view)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    let confirm = window.confirm('Review Updated');
                    if (confirm) {
                        window.history.back();
                    }

                    // console.log(data);
                }

            })
    }
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...view }
        newReview[field] = value;
        setView(newReview);
    }
    return (
        <div className='my-10'>
            <form onSubmit={updateReview}>
                <div className="mb-6 w-2/3 mx-auto">
                    <label htmlFor="text" className="block mb-2  text-gray-900 text-xl font-bold dark:text-gray-900">Update Review</label>
                    <input onChange={handleInputChange} type="text" id="text" defaultValue={review.person} name='person' className="bg-gray-50 border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Feedback" required />
                    <div className='text-end'>

                        <button type="submit" className='bg-cyan-700 w-[200px] text-center rounded-md font-medium my-6 mx-auto py-3 text-white'>Update</button>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default ReviewUpdate;