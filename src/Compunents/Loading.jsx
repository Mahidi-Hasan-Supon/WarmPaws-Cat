import React from 'react';
import { BeatLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center py-40 my-40'>
            <BeatLoader></BeatLoader>

        </div>
    );
};

export default Loading;