import React, { useEffect, useState } from 'react';
import PersonalReview from './PersonalReview';

const MyReview = () => {

    const [userReview, setUserReview] = useState([]);
    useEffect(() => {
        fetch('https://tech-tutor-server-side.vercel.app/review')
            .then(res => res.json())
            .then(data => setUserReview(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                userReview.map(reviews => <PersonalReview
                    key={reviews._id}
                    reviews={reviews}
                ></PersonalReview>)
            }

        </div>
    );
};

export default MyReview;