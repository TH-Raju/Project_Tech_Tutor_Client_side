import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const { email, person } = useLoaderData();
    console.log(email);
    console.log(person)
    return (
        <div>
            Update {email}
        </div>
    );
};

export default Update;