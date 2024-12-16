import React, { useState } from 'react';
import SinglePlayUI from '../components/ui/single-play';
const SinglePlay = () => {
    return (

        <div className="flex flex-col h-full w-full p-4">
            <div className="flex-auto p-4 flex justify-center items-center">
                <SinglePlayUI />
            </div>
        </div>
    );
};
export default SinglePlay;
