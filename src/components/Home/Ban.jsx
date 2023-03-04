import React from 'react';
import { Link } from 'react-router-dom';

const Ban = () => {
    return (
        <div>
            <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            <br className="sm:hidden" /> 50% Off
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free shipping! Use code:</span>
                            <span className="font-bold text-lg">Hard Work</span>
                        </div>
                        <Link to={"/services"} rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block  text-white font-bold bg-cyan-700 dark:border-gray-400">Buy Now</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Ban;