import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';

import { AuthContext } from '../context/AuthProvider';
import useTitle from '../useTitle';

const Login = () => {
    useTitle('Log in');
    const { user, signIn, googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [errors, setErrors] = useState('');
    const [load, setLoad] = useState(true);
    const location = useLocation();

    if (load) {
        <SpinnerCircular />
    } else {
        <SpinnerCircular enabled={false} />
    }
    const navigates = useNavigate();
    const from = location.state?.from?.pathname || '/services';

    const handleOnSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                // console.log(user);

                fetch('https://tech-tutor-server-side.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setLoad(false);
                        localStorage.setItem('token', data.token);
                    })
                setLoad(true)
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setErrors(error.message);
            })


    }
    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        if (user) {
            navigates(from, { replace: true })
        }
    }, [user])


    return (
        <div className=' bg-slate-700 w-full py-10'>
            <form className='w-80 mx-auto' onSubmit={handleOnSubmit}>
                <h1 className='text-4xl text-white font-semibold text-center mb-10'>Log In</h1>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" required />
                </div>
                <p className='py-4 my-3 px-3 text-red-400'>{errors}</p>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log in</button>
                <br />
                <p className='mt-4 text-white'>Don't have Account? <Link to='/register' className='text-green-500 font-bold underline'>Create Account</Link></p>
                <button type="button" onClick={handleGoogleSignIn} className="px-14 py-3 flex align-middle gap-5 w-full mt-6 text-center font-semibold border rounded-xl border-blue-900 dark:border-gray-100 dark:text-gray-100 hover:bg-slate-900"><FcGoogle className='text-2xl'></FcGoogle> Log in with Google</button>
            </form>

        </div>

    );

};





export default Login;