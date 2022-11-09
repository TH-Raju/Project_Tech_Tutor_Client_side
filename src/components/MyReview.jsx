import React, { useEffect, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import useTitle from '../useTitle';

import PersonalReview from './PersonalReview';

const MyReview = () => {

    const [userReview, setUserReview] = useState([]);
    useTitle('My Reviews');

    useEffect(() => {
        fetch('https://tech-tutor-server-side.vercel.app/review')
            .then(res => res.json())
            .then(data => setUserReview(data))
    }, [])
    return (
        <div>
            {
                userReview.length === 0 ?
                    <div ><SpinnerCircular /></div> : <SpinnerCircular enabled={false} />
            }
            {
                userReview.map(reviews =>
                    <PersonalReview
                        key={reviews._id}
                        reviews={reviews}
                    ></PersonalReview>)
            }

        </div>
    );
};

export default MyReview;