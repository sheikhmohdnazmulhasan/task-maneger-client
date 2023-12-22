import React from 'react';
import { RotatingTriangles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='min-h-screen w-full flex justify-center items-center'>
            <RotatingTriangles
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="rotating-triangles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loader;