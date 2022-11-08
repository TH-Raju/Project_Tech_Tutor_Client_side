import React, { useContext, useState } from 'react';
import logo from '../../img/tutor.png';
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


// ImCross
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    let [open, setOpen] = useState(true);
    let [setError] = useState('');
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => setError(error))
    }
    return (
        <div className='text-center'>
            <nav className="flex items-center justify-between flex-wrap px-12 pt-4 bg-slate-600">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img src={logo} className=' h-12 w-12 mr-2' alt="" />
                    <span className="font-semibold text-xl tracking-tight">Tech Tutor</span>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setOpen(!open)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>{open ? <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /> : <ImCross />}</svg>
                    </button>
                </div>
                <div className={`w-full ${open ? 'hidden' : 'block'} flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-sm lg:flex-grow lg:bg-black bg-slate-700 rounded-lg py-2">
                        <Link to='/home' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-lg">
                            Home
                        </Link>
                        <Link to='/services' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-lg">
                            Service
                        </Link>
                        <Link to='/blog' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-lg">
                            Blog
                        </Link>
                    </div>
                    <div>
                        {
                            user?.uid ?
                                <>
                                    <Link to="/register" onClick={handleLogOut} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Log Out</Link>
                                </>
                                :
                                <>
                                    <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mx-4">Log in</Link>
                                    <Link to="/register" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Register</Link>
                                </>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;