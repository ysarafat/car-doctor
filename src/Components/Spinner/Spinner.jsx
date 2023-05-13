import React from 'react';
import { Bars } from 'react-loader-spinner';

function Spinner() {
    return (
        <div className="min-h-[calc(100vh-87px)] flex justify-center items-center">
            <Bars
                height="80"
                width="80"
                color="#FF3811"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible
            />
        </div>
    );
}

export default Spinner;
