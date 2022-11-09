import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Review from '../Review';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceDetail = () => {
    const [userReview, setReview] = useState([]);
    const { _id, img, price, title, body } = useLoaderData();
    const { user } = useContext(AuthContext);

    const notify = () => toast.warn(' Log in First!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });



    const handleFeedback = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        const name = user.displayName;
        const email = user.email;
        const photo = user.photoURL;
        form.reset();


        alert("Thank You. Your Feedback is saved. Please Reload the Page to View")
        const review = {
            service: _id,
            person: feedback,
            name,
            email,
            photo


        }

        fetch('https://tech-tutor-server-side.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(er => console.log(er));


    }
    useEffect(() => {
        fetch('https://tech-tutor-server-side.vercel.app/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='bg-gray-800 p-6'>
            <section>
                <div className="container max-w-6xl mx-auto mt-16 space-y-6 sm:space-y-12">
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
                <form onSubmit={handleFeedback}>
                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Give a Review</label>
                        <input type="text" id="text" name='feedback' className="bg-gray-50 border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Feedback" required />
                        <div className='text-end'>
                            {
                                user?.uid ?
                                    <button type="submit" className='bg-cyan-700 w-[200px] text-center rounded-md font-medium my-6 mx-auto py-3 text-white'>Post</button>
                                    :
                                    <>
                                        <Link to='/login'><button onClick={notify} className='bg-cyan-700 w-[200px] text-center rounded-md font-medium my-6 mx-auto py-3 text-white'>Post</button></Link>
                                        <ToastContainer />
                                    </>
                            }
                        </div>
                    </div>
                </form>
            </div>

            <div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        userReview.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;