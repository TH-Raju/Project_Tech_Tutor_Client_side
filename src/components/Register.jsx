import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import useTitle from '../useTitle';

const Register = () => {
    useTitle('Register');
    toggle(true);
    const { createUser, googleProviderLogin } = useContext(AuthContext);
    const [errors, setErrors] = useState('');
    const [load, setLoad] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    if (load) {
        <SpinnerCircular />
    } else {
        <SpinnerCircular enabled={false} />
    }

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const name = form.name.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                setLoad(true);
                form.reset();
                console.log(user);

            })
        setLoad(false)
            .catch(error => {
                console.log(error);
                setErrors(error.message);
            });

    }


    return (
        <div className=' bg-slate-700 w-full py-10'>
            <form className='w-80 mx-auto' onSubmit={handleSubmit}>
                <h1 className='text-4xl text-white font-semibold text-center mb-10'>Registration</h1>
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input type="name" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" required />
                </div>
                <p className='py-4 my-3 px-3 text-red-400'>{errors}</p>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                <br />
                <p className='mt-4 text-white'>Already have Account? <Link to='/login' className='text-green-400 font-bold underline'>Log in</Link></p>
                <button type="button" onClick={handleGoogleSignIn} className="px-14 py-3 flex align-middle gap-5 w-full mt-6 text-center font-semibold border rounded-xl border-blue-900 dark:border-gray-100 dark:text-gray-100 hover:bg-slate-900"><FcGoogle className='text-2xl'></FcGoogle> Register with Google</button>
            </form>
            {
                toggle(false)
            }
        </div>

    );
};

const toggle = load => {
    if (load) {
        <SpinnerCircular />
    } else {
        <SpinnerCircular enabled={false} />
    }

}

export default Register;