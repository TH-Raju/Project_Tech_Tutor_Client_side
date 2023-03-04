import React from 'react';

const Choose = () => {
    return (
        <div className='text-center mb-48'>
            <div>
                <h2 className='text-6xl text-white font-bold'>Why Choose Us<span className='text-7xl font-extrabold'> ?</span></h2>
            </div>
            <div className='flex flex-wrap justify-evenly items-center gap-10'>
                <div>
                    <img src={require("../../img/choose.png")} className="h-96 max-w-full rounded-xl animate-slide-in-left" alt="choose" />
                </div>
                <ul className="steps  steps-vertical text-white font-bold">
                    <li className="step step-info">Trusted </li>
                    <li className="step step-info">Best Tutor</li>
                    <li className="step step-info">Best Classes</li>
                    <li className="step step-info">Student Satisfaction</li>
                    <li className="step step-info">Live Session</li>
                    <li className="step step-info">Support Session</li>
                    <li className="step step-info">16+ Project's</li>
                    <li className="step step-info">Life time Access</li>
                    <li className="step step-info">Best Guideline</li>
                    <li className="step step-info">Job Support</li>
                </ul>
            </div>
        </div>
    );
};

export default Choose;