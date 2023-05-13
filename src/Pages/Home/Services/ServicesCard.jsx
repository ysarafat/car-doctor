import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ServicesCard({ services }) {
    const { title, img, price, _id } = services;
    return (
        <div className="border border-light-text p-4 rounded-lg space-y-5">
            <img className="rounded-lg h-[290px] w-full" src={img} alt="" />
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-dark mb-1">{title}</h2>
                    <p className="text-xl font-semibold text-primary">Price : ${price}</p>
                </div>
                <Link to={`/booking/${_id}`}>
                    <BsArrowRightShort size={30} style={{ color: '#FF3811' }} />
                </Link>
            </div>
        </div>
    );
}

export default ServicesCard;
