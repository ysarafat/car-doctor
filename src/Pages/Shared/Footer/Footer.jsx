import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import logo from '../../../assets/logo.svg';

function Footer() {
    return (
        <footer className="bg-deep-dark  ">
            <section className="container mx-auto px-4 flex justify-between lg:flex-row flex-col gap-5 py-12 lg:py-28 ">
                <div className="space-y-5">
                    <img src={logo} alt="logo" />
                    <p className="text-light-text text-base">
                        Edwin Diaz is a software and web <br /> technologies engineer, a life coach{' '}
                        <br /> trainer who is also a serial .
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="bg-light-dark p-[4px] w-8 h-8 rounded-full flex justify-center items-center bg-opacity-50 cursor-pointer">
                            <BsFacebook style={{ color: 'white', fontSize: '20px' }} />
                        </div>
                        <div className="bg-light-dark p-[4px] w-8 h-8 rounded-full flex justify-center items-center bg-opacity-50 cursor-pointer">
                            <BsTwitter style={{ color: 'white', fontSize: '20px' }} />
                        </div>
                        <div className="bg-light-dark p-[4px] w-8 h-8 rounded-full flex justify-center items-center bg-opacity-50 cursor-pointer">
                            <BsLinkedin style={{ color: 'white', fontSize: '20px' }} />
                        </div>
                        <div className="bg-light-dark p-[4px] w-8 h-8 rounded-full flex justify-center items-center bg-opacity-50 cursor-pointer">
                            <BsInstagram style={{ color: 'white', fontSize: '20px' }} />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-white text-xl font-semibold">About</h3>
                    <ul className="text-light-text mt-10 flex flex-col gap-5">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Service</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white text-xl font-semibold">Company</h3>
                    <ul className="text-light-text mt-10 flex flex-col gap-5">
                        <li>Why car doctor</li>
                        <li>About Us</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white text-xl font-semibold">Support</h3>
                    <ul className="text-light-text mt-10 flex flex-col gap-5">
                        <li>Support Center</li>
                        <li>Feedback</li>
                        <li>Accesbility</li>
                    </ul>
                </div>
            </section>
            <section className="container mx-auto px-4 border-t border-light-dark py-6">
                <p className="text-center text-light-text text-base font-semibold">
                    {' '}
                    ©2023 Legend Chef, All Rights Reserved
                </p>
            </section>
        </footer>
    );
}

export default Footer;
