import React from 'react';

const Review = () => {
    return (
        <div className='my-16'>
            <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                    <h1 className="p-4 text-6xl font-semibold leading-none text-center">What our customers are saying about us!</h1>
                </div>
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Brave This Tutor is Best that I have ever seen Before. When I start Course here that's time I'm a begginer. But after course Completation. Now I can feel What am I before and After. It's really amazing Journey
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                            <img src={require('../../img/student-1.png')} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700" />
                            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                            <p className="text-sm uppercase">CEO, ILLUM</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                            <img src={require('../../img/pp.jpg')} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                            <p className="text-xl font-semibold leading-tight">TH Raju</p>
                            <p className="text-sm uppercase">Software Engineer</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>He is best tutor in online platform. I Learnd so many thing from him. his support and guidline are second of none. I love the way he teached us.

                                I recommand this course for those people who are annoying with tech. And who want to do something on tech field but he/she didn't do anything by himself. those are recommand this course tutor. It's the best.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                            <img src={require('../../img/student-3.png')} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                            <p className="text-sm uppercase">Programmer</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                            <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                            <p className="text-sm uppercase">Aliquam illum</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Review;