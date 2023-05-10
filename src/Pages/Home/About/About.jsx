import React from 'react';
import { Link } from 'react-router-dom';
import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';

function About() {
    return (
        <div className="my-20 flex gap-12 lg:gap-0 items-center justify-center lg:justify-between flex-col lg:flex-row ">
            <div className="lg:w-1/2 relative">
                <img className="w-[460px] h-[473px] object-cover rounded-lg " src={person} alt="" />
                <img
                    className="h-[332px] w-[327px] object-cover rounded-lg border-8 border-white absolute right-0 lg:right-40 top-[40%] "
                    src={parts}
                    alt=""
                />
            </div>
            <div className="lg:w-1/2  h-auto">
                <h3 className="text-xl font-bold text-primary">About Us</h3>
                <h1 className="text-5xl mt-5 mb-6">
                    We are qualified & of experience in this field
                </h1>
                <p className="text-light-dark">
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which do not look even slightly believable.
                </p>
                <p className="text-light-dark mt-5 mb-6">
                    the majority have suffered alteration in some form, by injected humour, or
                    randomised words which do not look even slightly believable.
                </p>
                <Link to="/">
                    <button className="bg-primary border border-primary py-3 px-6 rounded-lg text-base text-white">
                        Get More Info
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default About;
