import React from 'react';
import img from '../../img/tutor.png'

const Summary = () => {
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid justify-center grid-cols-2 mx-auto text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6 text-white">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
                        <p className="text-sm sm:text-base">Clients</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6 text-white">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">30K</p>
                        <p className="text-sm sm:text-base">Followers on social media</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6 text-white">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">20</p>
                        <p className="text-sm sm:text-base">Published site</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6 text-white">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">5+</p>
                        <p className="text-sm sm:text-base">TECH Course</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6 text-white">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">4</p>
                        <p className="text-sm sm:text-base">Years of experience</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6 text-white">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div>
                </div>
            </section>


            <div className='text-white'>
                <h1 className='bg-gray-800 underline text-white text-3xl text-center py-10 font-bold'>Contact With Me</h1>
                <div className="grid w-full grid-cols-1 gap-8  py-16 mx-auto md:grid-cols-2 md:px-12  xl:px-32 pl-4 dark:bg-gray-800 dark:text-gray-100">

                    <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                            <h2 className="text-4xl text-white font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                            <div className="dark:text-gray-400">You want to say me</div>
                        </div>
                        <img src={img} alt="Contact our customer support" className="p-6 h-52 md:h-64 w-72" />
                    </div>
                    <form noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div>
                            <label htmlFor="name" className="text-sm text-white">Full name</label>
                            <input id="name" type="text" placeholder="Your name" className="w-full p-3 rounded dark:bg-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm text-white">Email</label>
                            <input id="email" type="email" placeholder="Your email" className="w-full p-3 rounded dark:bg-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm text-white">Message</label>
                            <textarea id="message" rows="3" placeholder="Your message" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                        </div>
                        <button type="submit" method="POST" action="mailto: rajukhan894200@gmail.com" encType="multipart/form-data" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 bg-violet-300  dark:text-gray-900">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Summary;