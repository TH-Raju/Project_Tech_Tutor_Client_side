import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 ">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-400">Here Are some FAQ those Question Frequently asked by our Client's.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why We Choose Tech Tutor?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">We Provide Best Online Classes and Support. We Believe Our Service. and Try to give our Best.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Did You Provide Job or Internship?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">We Just support you to get a Job or Intern. We Provide Guideline on This Sector. If You can proved yourself. Then you'll find any job or Intern. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How many time to done any course from here?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Minimum 4-6 month's or maximum 1 year. It depends on your Hard working or effort. If you passionate then You can done any course as fast as you can. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;