import React from 'react';
import { RiseLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center py-40 my-40'>
            <RiseLoader></RiseLoader>

        </div>
    );
};

export default Loading;