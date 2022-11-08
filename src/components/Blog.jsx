import React from 'react';

const Blog = () => {
    return (
        <div className=' ' >
            <div className="dark:bg-gray-800 dark:text-gray-50 pt-7">
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">

                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-12 lg:p-10">
                        <h1 className="text-3xl font-semibold">🔰 Difference between SQL and NoSQL</h1>
                        <p className="flex-1 pt-6">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                            </div>
                            <span className="text-xs">3 min read</span>
                        </div>
                    </div>
                </div>
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">

                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-12 lg:p-10">
                        <h1 className="text-3xl font-semibold">🔰 What is JWT, and how does it work?</h1>
                        <p className="flex-1 pt-6">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                            </div>
                            <span className="text-xs">4 min read</span>
                        </div>
                    </div>
                </div>
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">

                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-12 lg:p-10">
                        <h1 className="text-3xl font-semibold">🔰 What is the difference between javascript and NodeJS?</h1>
                        <p className="flex-1 pt-6">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                            </div>
                            <span className="text-xs">5 min read</span>
                        </div>
                    </div>
                </div>
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900 pb-10">

                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-12 lg:p-10">
                        <h1 className="text-3xl font-semibold">🔰 How does NodeJS handle multiple requests at the same time?</h1>
                        <p className="flex-1 pt-6">How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                            </div>
                            <span className="text-xs">6 min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;