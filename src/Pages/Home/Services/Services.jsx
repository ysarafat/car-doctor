/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

function Services() {
    const [servicesData, setServicesData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then((res) => res.json())
            .then((data) => setServicesData(data));
    }, []);

    return (
        <div>
            <div className="text-center space-y-2">
                <h2 className="top_title"> Service</h2>
                <h1 className="main_title">Our Service Area</h1>
                <p className="title_s_des">
                    the majority have suffered alteration in some form, by injected humour, or
                    randomised words which do not look even slightly believable.{' '}
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {servicesData?.map((service) => (
                    <ServicesCard key={service._id} services={service} />
                ))}
            </div>
            <button className="btn_outline mt-10 mx-auto">More Service</button>
        </div>
    );
}

export default Services;
